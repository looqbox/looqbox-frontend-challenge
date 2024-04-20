import { Outlet } from "react-router-dom";
import Menu from "../components/Menu/Menu";
import Footer from "../components/Footer";

function Root() {
  return (
    <div className="flex flex-col h-full w-full">
      <header className="w-full px-2">
        <Menu />
      </header>
      <Outlet />
      <Footer />
    </div>
  );
}

export default Root;
