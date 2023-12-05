import React, { useState, useEffect } from 'react';
import { Button, Form, FormControl } from 'react-bootstrap';
import { io } from 'socket.io-client';
import '../css/chat.css';

const socket = io("https://api-multi-gabys.onrender.com")

function Chat() {
  const [nuevoMensaje, setNuevoMensaje] = useState("")
  const [mensajes, setmensajes] = useState([])
  const [ventas, setVentas]=useState([])

  const enviarMensaje = () => {
    socket.emit("envioMensaje", {
      usuario: socket.id,
      mensaje: nuevoMensaje
    })
  }

  useEffect(() => {
    socket.on("envioMensaje", (data) => {
      setmensajes(mensajes => [...mensajes, data])
    })

    socket.on("ventaRealizada", (ventaData) => {
      const nuevaVenta = {
        usuario: "Sistema",
        mensaje: `Se ha realizado una venta de ${ventaData.totalVenta} por ${ventaData.nombres}.`,
        fechaVenta: ventaData.fechaVenta,
      };
    
      setVentas((ventas) => [...ventas, nuevaVenta]);

      alert(`Se ha realizado una venta de ${ventaData.totalVenta} por ${ventaData.nombres}.`);
    });

    return () => {
      socket.off("envioMensaje")
      socket.off("ventaRealizada")
    }
  }, [])

  return (
    <div className="chatGeneral">
      <Form>
        <h1>Chat General</h1>
        <ul>
          {mensajes.map((mensaje) => (
            <li key={mensaje.id}>{mensaje.usuario}: {mensaje.mensaje}</li>
          ))}
        </ul>
        <FormControl
          type="text"
          label="Nombre"
          onChange={e => setNuevoMensaje(e.target.value)} />
        <Button onClick={enviarMensaje}>Enviar Mensaje</Button>
      </Form>
    </div>
  )
}
export default Chat;
