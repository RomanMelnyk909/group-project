import "./navigation.css";
import NavigationItem from '../NavigationItem/NavigationItem';
import { v4 as uuidv4 } from 'uuid';
import { Link } from "react-router-dom";
import { ABOUT_PATH, BLOG_PATH,  HOME_PATH, PRODUCTS_PATH } from "../../constants/constants";


const Navigation = () => {
  

   const navElements = [
      {
         id: uuidv4(),
         text: 'Home page',
         isUppercasetext: true,
         path: HOME_PATH,
         isCategiries: false,
      },
      {
         id: uuidv4(),
         text: 'Coctail`s categories',
         isUppercasetext: true,
         path: null,
         isCategiries: true,
      },
      {
         id: uuidv4(),
         text: 'Products',
         isUppercasetext: true,
         path: PRODUCTS_PATH,
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
         text: 'About us',
         isUppercasetext: true,
         path: ABOUT_PATH,
         isCategiries: false,
      },

   ];


   return (

      <nav className='navigation'>
         {
            navElements.map((element) => {
              if(element.isCategiries){
               return  <div  key={element.id}  >
               <NavigationItem   
                  text={element.text}
                  isUppercasetext={element.isUppercasetext}
                  isCategiries={element.isCategiries}
               />
            </div>
              }
              else{
                return <Link key={element.id} to={element.path}>
                        <NavigationItem                
                        text={element.text}
                        isUppercasetext={element.isUppercasetext}
                        isCategiries={element.isCategiries}
                     />
                  </Link>

               }
            })
         }
      </nav>
   )
}

export default Navigation;