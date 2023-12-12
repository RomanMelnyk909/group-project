import './weather.css';
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import { useEffect, useState, createContext } from 'react';
import { createRequestPath } from "../../helpers/helpers";
import { WEATHER_BASE_URL } from "../../constants/endpoints";

export let DataCategoriesContext = createContext()

const Weather = (props) => {
   const { text, isUppercasetext, isCategiries } = props

   const [data, setData] = useState([])
   const [fetching, setFetching] = useState(false)
   const [fetchError, setFetchError] = useState(null);
   useEffect(function () {
      setFetching(true)
      fetch(WEATHER_BASE_URL)
         .then(response => response.json())
         .then(resp => {
            setFetching(false)
            setData(resp)


         })
         .catch(err => {

            setFetching(false)
            setFetchError(err)
         });
   }, [])

   console.log(data);




   return (

      <div className='nav-item'>
         {isUppercasetext ? text.toUpperCase() : text}
         {isCategiries &&
            (

               <>
                  <div className='nav-arrow_down'>
                     &#9660;</div>
                  <div className='navigatin-categiries hidden'  >
                     {
                        data.map((element) => {

                           return (

                              <Link key={uuidv4()} to={element.urlSlug}>

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

export default Weather;