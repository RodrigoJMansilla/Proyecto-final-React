import style from "./App.module.css";
import { useState } from "react";
import { ItemListContainer } from "./components/pages/itemList/ItemListContainer";
import { Navbar } from "./components/layout/navbar/Navbar";
import { ProductCardDetail } from "./components/common/productCardDetail/ProductCardDetail";
import { ItemDetailContainer } from "./components/pages/itemDetail/ItemDetailContainer";
import { products } from "./productsMock";
import Layout from "./components/layout/Layout";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { menuRoutes } from "./routes/menuRoutes";

function App() {
  const [counter, setCounter] = useState(1);

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
	          {menuRoutes.map(({ id, path, Element }) => (
	            <Route key={id} path={path} element={<Element />} />
	          ))}
        </Route>
        <Route path="*" element={<h2>Debe haber un error <Link to="/">Click aqui para volver a home</Link></h2>} />
      </Routes>
    </BrowserRouter>


    // <>
    //   <Navbar contador={counter} />
    //   <main>
    //     <ItemListContainer />
    //     <ItemDetailContainer/>
        
    //   </main>
    // </>
  );
}

export default App;
