import "./navigation.css";
import NavigationItem from '../NavigationItem/NavigationItem';
import { useContext } from "react";

import { Link } from "react-router-dom";
import { ABOUT_PATH, BLOG_PATH, COCTAIL_CATEGIRIES_PATH, HOME_PATH } from "../../constants/constants";


const Navigation = (props) => {
   const { } = props

   const navElements = [
      {
		key:``,
         text: 'Home page',
         isUppercasetext: true,
         path: HOME_PATH,
		 isCategiries:false,
      },
      {
		key:``,
         text: 'Coctail`s categories',
         isUppercasetext: true,
         path: null,
		 isCategiries:true,
      },
      {
		key:``,
         text: 'Blog',
         isUppercasetext: true,
          path: BLOG_PATH,
		  isCategiries:false,
      },
      {
		key:``,
         text: 'About us',
         isUppercasetext: true,
		 path: ABOUT_PATH,
		 isCategiries:false,
      },

   ];


   return (

         <div className='navigation'>
            {
               navElements.map((element) => {
                  return (
					<Link to={element.path}>
						<NavigationItem
                        key={element.text}
                        text={element.text}
                        isUppercasetext={element.isUppercasetext}
						isCategiries={element.isCategiries}
                        />
					</Link>
				
                  )
               })
            }
         </div>
   )
}

export default Navigation;