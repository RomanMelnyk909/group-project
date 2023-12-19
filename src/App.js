import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Blog from "./components/Blog";
import BlogLena from "./components/BlogLena";
import Categories from "./components/Categories";
import Products from "./components/Products";
import { Routes, Route, useNavigate } from "react-router";
import AddProducts from "./components/AddProducts";
import {
  ADD_PRODUCTS_PATH,
  BLOG_PATH,
  BLOG_LENA_PATH,
  PRODUCTS_PATH,
  CATEGIRIES_PATH,
} from "./constants/pathNames";
import { createRequestPath } from "./helpers/helpers";
import { PRODUCTS_ADD_ENDPOINT } from "./constants/endpoints";

function App() {
  const navigator = useNavigate();

  const mockProduct = {
    name: "Тестовий",
    priority: 1,
    categoryId: 2,
    price: 200,
    description: "Тестовий Тест Тортовий!",
    ids: [1],
  };

  const onSubmitDataToApi = () => {
    const apiEndpoint = createRequestPath(PRODUCTS_ADD_ENDPOINT);

    fetch(apiEndpoint, {
      method: "POST",
      body: JSON.stringify(mockProduct),
      headers: { "Content-Type": "application/json" },
    })
      .then((resp) => {
        console.log("response => ", resp);
        return resp;
      })
      .then((resp) => resp.json())
      .then((resp) => console.log("response Parsed => ", resp))
      .then(() => navigator(PRODUCTS_PATH))
      .catch((err) => console.log("error => ", err));
  };

  return (
    <div className="App">
      <button onClick={onSubmitDataToApi}>Add Product</button>
      <Header />
      <Routes>
        <Route path={ADD_PRODUCTS_PATH} element={<AddProducts />} />
        {/* <Route path={ABOUT_PATH} element={ABOUT_PATH} /> */}
        <Route path={BLOG_PATH} element={<Blog />} />
        <Route path={BLOG_LENA_PATH} element={<BlogLena />} />
        <Route path={CATEGIRIES_PATH} element={<Categories />} />
        <Route path={PRODUCTS_PATH} element={<Products />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
