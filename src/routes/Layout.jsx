import { Outlet } from "react-router-dom";
import "../App.css";

function Layout() {
  return (
    <div>
      <div style={{ marginTop: "6%", marginLeft: "5%" }}>
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
