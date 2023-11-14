import { Form, Stack, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  
  return (
    <Form className="formu-login">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          Nunca compartiremos tu correo electrónico con nadie más.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Stack direction="horizontal" gap={3}>
          <div className="p-2">First item</div>
          <div className="p-2">Third item</div>
        </Stack>
      </Form.Group>
      <div className="center-cart">
        <Button variant="primary" type="submit" className="boton-log">
          Submit
        </Button>
      </div>
    </Form>
  );
}

export default LoginForm;
