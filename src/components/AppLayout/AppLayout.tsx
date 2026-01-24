import { Outlet } from "react-router-dom";
import { Header } from "../Header/Header";

export function AppLayout() {
  return (
    <div className="app-container">
        <Header />
        <Outlet />
    </div>
  );
}
