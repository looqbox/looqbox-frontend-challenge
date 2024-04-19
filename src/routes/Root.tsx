import { Outlet } from "react-router-dom";
import Menu from "../components/Menu/Menu";
import Footer from "../components/Footer";

function Root() {
  return (
    <div className="flex flex-col h-full w-full">
      <Menu />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Root;
