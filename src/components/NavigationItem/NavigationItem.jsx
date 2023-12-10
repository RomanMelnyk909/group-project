import './navigationitem.css';
import { Link } from "react-router-dom";
// import { ABOUT_PATH, BLOG_PATH, HOME_PATH } from "../../constants/constants";
// import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const NavigationItem = (props) => {
   const { text, isUppercasetext, isCategiries } = props
   let categories = [
      {
         id: uuidv4(),
         title: 'Item',
         isUppercasetext: true,
         // urlSlug: HOME_PATH,
         isCategiries: false,
      },
      // {
      //    "title": "string",
      //    "priority": 0,
      //    "urlSlug": "string",
      //    "image": "string"
      //  },
      {
         id: uuidv4(),
         title: 'Item',
         isUppercasetext: true,
         // urlSlug: BLOG_PATH,
         isCategiries: false,
      },
      {
         id: uuidv4(),
         title: 'Item',
         isUppercasetext: true,
         // urlSlug: ABOUT_PATH,
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

                              <Link key={element.id} to={element.urlSlug}>

                                 <div className="navigatin-categiries-item">
                                    {element.title}
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