import { Routes, Route } from "react-router-dom";
import Users from "../pages/users/Users";

export default function RoutesApp() {
  return (
    <Routes>
      <Route path="/" element={<Users />}></Route>
    </Routes>
  );
}
