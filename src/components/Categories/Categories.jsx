import styles from './categories.module.css';
import CategoriesCard from '../CategoriesCard';
import { useEffect, useState, createContext } from 'react';
import { createRequestPath } from "../../helpers/helpers";
import { CARTEGORIES_LIST_ENDPOINT } from "../../constants/endpoints";

export let dataCategories = createContext()

const Categories = (props) => {
    const { flagReverse } = props;
  
    const [data, setData] = useState([])
    const [fetching, setFetching] = useState(false)
    const [fetchError, setFetchError] = useState(null);
    useEffect(function () {
        setFetching(true)
        fetch(createRequestPath(CARTEGORIES_LIST_ENDPOINT))
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


    let flagToReverse=flagReverse || false 

    return (

        <div className={styles['categories']}>

           {
            flagToReverse?
            data.slice(0).reverse().map((el) => {
                return <CategoriesCard id={el.id} title={el.title} image={el.image} string={el.urlSlug} />
            }):
            data.map((el) => {
                return <CategoriesCard id={el.id} title={el.title} image={el.image} string={el.urlSlug} />
            })
           }
        
        </div>
      
    )
};

export default Categories;