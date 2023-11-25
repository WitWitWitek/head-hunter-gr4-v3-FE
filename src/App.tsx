import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Login } from "./features/student/Login";
import { Register } from "./features/student/Register";
import { NotFound } from "./features/utils/NotFound";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
export const WrappedApp = () => {
  return (
    <HashRouter>
      <App />
    </HashRouter>
  );
};
