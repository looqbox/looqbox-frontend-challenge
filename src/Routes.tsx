import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./presentation/pages/Home";
import Details from "./presentation/pages/Details";

const AppRoutes = () => {
  return(
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/detalhes" element={<Details />} />

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}

export default AppRoutes