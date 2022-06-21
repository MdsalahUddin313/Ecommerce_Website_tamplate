import "./App.css";
import "flowbite";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Pages/Home_page/Home";
import AllProduct from "./Components/Pages/ProductPage/AllProduct";
import Navbar from "./Components/Navbar/Header/Navbar";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/all-product" element={<AllProduct />}></Route>
          <Route path="/single-product"></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
