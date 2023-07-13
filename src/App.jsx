import { useState } from "react";
import Layout from "./components/layout/Layout";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { menuRoutes } from "./routes/menuRoutes";
import { CartContextProvider } from "./context/CartContext";

function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <Routes>
          <Route element={<Layout />}>
            {menuRoutes.map(({ id, path, Element }) => (
              <Route key={id} path={path} element={<Element />} />
            ))}
          </Route>
          <Route
            path="*"
            element={
              <h2>
                Debe haber un error{" "}
                <Link to="/">Click aqui para volver a home</Link>
              </h2>
            }
          />
        </Routes>
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;
