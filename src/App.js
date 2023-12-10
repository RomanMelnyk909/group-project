import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Blog from "./components/Blog";
import Categories from "./components/Categories";
import Products from "./components/Products";
import { Routes, Route } from "react-router";
import AddProducts from "./components/AddProducts";
import {ADD_PRODUCTS_PATH, BLOG_PATH, PRODUCTS_PATH, CATEGIRIES_PATH } from "./constants/constants";



function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path={ADD_PRODUCTS_PATH} element={<AddProducts/>} />
        {/* <Route path={ABOUT_PATH} element={ABOUT_PATH} /> */}
        <Route path={BLOG_PATH} element={<Blog/>} />
        <Route path={CATEGIRIES_PATH} element={<Categories/>} />
        <Route path={PRODUCTS_PATH} element={<Products/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
