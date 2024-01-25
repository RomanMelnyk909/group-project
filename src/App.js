import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Blog from "./components/Blog";
import BlogLena from "./components/BlogLena";
import Categories from "./components/Categories";
import CategoriesValentine from "./components/CategoriesValentine";
import Products from "./components/Products";
import { Routes, Route } from "react-router";
import {
  BLOG_PATH,
  BLOG_LENA_PATH,
  PRODUCTS_PATH,
  CATEGIRIES_PATH,
  CATEGIRIES_VALENTINE_PATH,
  ADD_VLAD_BLOGS_PATH,
  ADD_CATEGORIES_FORM_VALENTINE_PATH,
  ADD_CATEGORIES_FORM_PATH,
  ADD_LERA_PRODUCTS_PATH,
  PRODUCTS_LERA_PATH,
  PRODUCTS_SASHA_PATH,
  ADD_SASHA_PRODUCTS_PATH,
  BLOG_UPDATE,
  ADD_CATEGORIES_JU_PATH
} from "./constants/pathNames";


import AddCategoryForm from "./components/AddCategoryForm/AddCategoryForm";
import AddVladBlogs from "./components/AddVladBlogs";
import BlogUpdate from "./components/BlogUpdate/BlogUpdate";
import AddProductFormLera from "./components/AddProductFormLera";
import AddProdFormSasha from "./components/AddProdFromSasha";
import { createContext, useState } from 'react';
import AddCategoriesFormValentine from "./components/AddCategoriesFormValentine/AddCategoriesFormValentine";
import ProductsLera from "./components/ProductsLera";
import ProdSasha from "./components/ProdSasha";
import ClassComponentLera from "./components/ClassComponentLera/ClassComponentLera";
import AddCategoriesJu from "./components/AddCategoriesJu";

export let ChangeIdContext = createContext()


function App() {
	const [refetchId, setRefetchId] = useState(null);

  return (
    <div className="App">
		<ClassComponentLera />
      <Header />
      <ChangeIdContext.Provider value={{refetchId, setRefetchId}}>
        <Routes>
          <Route path={ADD_LERA_PRODUCTS_PATH} element={<AddProductFormLera />} />
          <Route path={ADD_SASHA_PRODUCTS_PATH} element={<AddProdFormSasha />} />
          <Route path={PRODUCTS_LERA_PATH} element={<ProductsLera />} />
          <Route path={PRODUCTS_SASHA_PATH} element={<ProdSasha />} />
          {/* <Route path={ABOUT_PATH} element={ABOUT_PATH} /> */}
          <Route path={BLOG_PATH} element={<Blog />} />
          <Route path={BLOG_LENA_PATH} element={<BlogLena />} />
          <Route path={CATEGIRIES_PATH} element={<Categories />} />
          <Route path={PRODUCTS_PATH} element={<Products />} />
          <Route path={BLOG_PATH} element={<Blog />} />
          <Route path={ADD_VLAD_BLOGS_PATH} element={<AddVladBlogs />} />
          <Route path={BLOG_UPDATE} element={<BlogUpdate />} />
        <Route path={CATEGIRIES_PATH} element={<Categories />} />
          <Route path={CATEGIRIES_VALENTINE_PATH} element={<CategoriesValentine/>} />
          <Route path={ADD_CATEGORIES_FORM_PATH} element={<AddCategoryForm />} />
          <Route path={ADD_CATEGORIES_JU_PATH} element={<AddCategoriesJu />} />
          <Route path={ADD_CATEGORIES_FORM_VALENTINE_PATH} element={<AddCategoriesFormValentine />} />
        </Routes>
      </ChangeIdContext.Provider>

      <Footer />
    </div>
  );
}

export default App;
