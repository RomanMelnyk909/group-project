import "./navigation.css";
import NavigationItem from '../NavigationItem/NavigationItem';
import { v4 as uuidv4 } from 'uuid';
import { Link } from "react-router-dom";
import { ADD_CATEGORIES_FORM_PATH, PRODUCTS_PATH, BLOG_PATH, ADD_PRODUCTS_PATH, CATEGIRIES_PATH, CATEGIRIES_VALENTINE_PATH, ADD_CATEGORIES_FORM_VALENTINE_PATH, ADD_VLAD_BLOGS_PATH } from "../../constants/pathNames";

import { PRODUCTS_PATH, BLOG_PATH, ADD_PRODUCTS_PATH, CATEGIRIES_PATH, CATEGIRIES_VALENTINE_PATH,ADD_VLAD_BLOGS_PATH,ADD_CATEGORIES_FORM_PATH } from "../../constants/pathNames";

// export let dataCategories = createContext()
const Navigation = () => {

   const navElements = [
      {
         id: uuidv4(),
         text: 'Categoties',
         isUppercasetext: true,
         path: CATEGIRIES_PATH,
         isCategiries: true,
      },
      {
         id: uuidv4(),
         text: 'Add Categories',
         isUppercasetext: true,
         path: ADD_CATEGORIES_FORM_PATH,
         isCategiries: false,
      },
      {
         id: uuidv4(),
         text: 'CategotiesValentine',
         isUppercasetext: true,
         path: CATEGIRIES_VALENTINE_PATH,
         isCategiries: true,
      },
      {
         id: uuidv4(),
         text: 'AddCategoriesValentine',
         isUppercasetext: true,
         path: ADD_CATEGORIES_FORM_VALENTINE_PATH,
         isCategiries: false,
      },
      {
         id: uuidv4(),
         text: 'Blog',
         isUppercasetext: true,
         path: BLOG_PATH,
         isCategiries: false,
      },
      {
         id: uuidv4(),
         text: 'Add Blogs',
         isUppercasetext: true,
         path: ADD_VLAD_BLOGS_PATH,
         isCategiries: false,
      },
      {
         id: uuidv4(),
         text: 'Product',
         isUppercasetext: true,
         path: PRODUCTS_PATH,
         isCategiries: false,
      },
      
      {
         id: uuidv4(),
         text: 'Add products',
         isUppercasetext: true,
         path: ADD_PRODUCTS_PATH,
         isCategiries: false,
      },
     
   ];

   return (
      <nav className='navigation'>
         {
            navElements.map((element) => {
               return <Link key={element.id} to={element.path}>
                  <NavigationItem
                     text={element.text}
                     isUppercasetext={element.isUppercasetext}
                     isCategiries={element.isCategiries}
                  />
               </Link>
            })
         }
      </nav>
   )
}

export default Navigation;