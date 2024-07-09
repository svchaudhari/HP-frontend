// eslint-disable-next-line
import React, { useEffect } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminLayout from "./layouts/AdminLayout";
//import HomePage from './pages/HomePage';
//import CotactPage from './pages/ContactPage';
import DesktopPage from "./pages/DesktopPage";

export default function App() {
  useEffect(() => {
    if (window.location.pathname === "/") {
      window.location.href = "/home.html";
    }
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" />
        <Route
          path="/desktop"
          element={
            <AdminLayout>
              <DesktopPage />
            </AdminLayout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
