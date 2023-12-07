import './navigationitem.css';
import { Link } from "react-router-dom";
import { ABOUT_PATH, BLOG_PATH, COCTAIL_CATEGIRIES_PATH, HOME_PATH } from "../../constants/constants";
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const NavigationItem = (props) => {
   const { text, isUppercasetext, isCategiries, key } = props
   let categories = [
      {
         id: uuidv4(),
         text: 'Home page',
         isUppercasetext: true,
         path: HOME_PATH,
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

      <div className='nav-item'>
         {!isUppercasetext ? text.toUpperCase() : text}
         {isCategiries &&
            (

               <>
                  <div className='nav-arrow_down'>
                     &#9660;</div>
                  <div className='navigatin-categiries hidden'  >
                     {
                        categories.map((element) => {

                           return (

                              <Link key={element.id} to={element.path}>

                                 <div className="navigatin-categiries-item">

                                    {/* <NavigationItem
                                    key={element.id}
                                    text={element.text}
                                    isUppercasetext={element.isUppercasetext}
                                    isCategiries={element.isCategiries}
                                    />*/}
                                    {element.text}
                                 </div>
                              </Link>

                           )
                        })
                     }
                  </div>
               </>
            )
         }
      </div>

   )
}

export default NavigationItem;