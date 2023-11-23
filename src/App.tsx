import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Login } from "./layout/Log&Reg/Login";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
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
