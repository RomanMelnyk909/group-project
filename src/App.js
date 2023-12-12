import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Blog from "./components/Blog";
import Categories from "./components/Categories";
import Products from "./components/Products";
import { Routes, Route } from "react-router";
import AddProducts from "./components/AddProducts";
import { ADD_PRODUCTS_PATH, BLOG_PATH, PRODUCTS_PATH, CATEGIRIES_PATH, WEATHER_PATH } from "./constants/pathNames";
import { createRequestPath } from "./helpers/helpers";
import { PRODUCTS_LIST_ENDPOINT } from "./constants/endpoints";




function App() {
  console.log(createRequestPath(PRODUCTS_LIST_ENDPOINT))
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path={ADD_PRODUCTS_PATH} element={<AddProducts />} />
        {/* <Route path={ABOUT_PATH} element={ABOUT_PATH} /> */}
        <Route path={BLOG_PATH} element={<Blog />} />
        <Route path={CATEGIRIES_PATH} element={<Categories />} />
        <Route path={PRODUCTS_PATH} element={<Products />} />

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
