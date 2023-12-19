import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Blog from "./components/Blog";
import Categories from "./components/Categories";
import CategoriesValentine from "./components/CategoriesValentine";
import Products from "./components/Products";
import { Routes, Route, useNavigate } from "react-router";
import AddProducts from "./components/AddProducts";
import {
  ADD_PRODUCTS_PATH,
  BLOG_PATH,
  PRODUCTS_PATH,
  CATEGIRIES_PATH,
  CATEGIRIES_VALENTINE_PATH,
  ADD_VLAD_BLOGS_PATH,
  BLOG_UPDTATE_R,
} from "./constants/pathNames";
import { createRequestPath } from "./helpers/helpers";
import { PRODUCTS_ADD_ENDPOINT } from "./constants/endpoints";
import AddCategoryForm from "./components/AddCategoryForm/AddCategoryForm";
import AddVladBlogs from "./components/AddVladBlogs";
import { createContext, useState } from "react";
import BlogsUpdateR from "./components/BlogsUpdateR";

export let ChangeIdContext = createContext();

function App() {
  const [refetchId, setRefetchId] = useState(null);
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
      <Header />
      <ChangeIdContext.Provider value={{ refetchId, setRefetchId }}>
        <Routes>
          <Route path={ADD_PRODUCTS_PATH} element={<AddProducts />} />
          {/* <Route path={ABOUT_PATH} element={ABOUT_PATH} /> */}
          <Route path={BLOG_PATH} element={<Blog />} />
          <Route path={ADD_VLAD_BLOGS_PATH} element={<AddVladBlogs />} />
          <Route path={BLOG_UPDTATE_R} element={<BlogsUpdateR />} />
          <Route path={CATEGIRIES_PATH} element={<Categories />} />
          <Route
            path={CATEGIRIES_VALENTINE_PATH}
            element={<CategoriesValentine />}
          />
          <Route path={PRODUCTS_PATH} element={<Products />} />
          {/* <Route path={ADD_CATEGORIES_FORM_PATH} element={<AddCategoryForm />} /> */}
        </Routes>
      </ChangeIdContext.Provider>

      <Footer />
    </div>
  );
}

export default App;
