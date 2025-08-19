import { Navigate, Route, Routes } from "react-router-dom";

import Details from "../screens/Details";
import Home from "../screens/Home";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pokemon/:name" element={<Details />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
