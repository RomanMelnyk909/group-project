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
        {/* <Route path={CONTACT_PATH} element={CONTACT_PATH} />
        <Route path={HOME_PATH} element={HOME_PATH} />
        <Route path={ABOUT_PATH} element={ABOUT_PATH} />
        <Route path={BLOG_PATH} element={BLOG_PATH} />
        <Route path={HELP_PATH} element={HELP_PATH} /> */}
        {/* <Route path={COCTAIL_CATEGIRIES_PATH} element={``} /> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
