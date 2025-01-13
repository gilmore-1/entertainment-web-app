import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import LoginIn from "./page/LoginIn";
import SignUp from "./page/SignUp";
import Main from "./page/Main";
createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <StrictMode>
      <Routes>
        <Route path="/" index element={<Main />} />
        <Route path="/login" element={<LoginIn />} />
        <Route path="/register" element={<SignUp />} />
      </Routes>
    </StrictMode>
  </BrowserRouter>
);
