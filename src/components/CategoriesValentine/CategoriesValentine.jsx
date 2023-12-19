import styles from './categoriesValentine.module.css';
import CategoriesCardValentine from '../CategoriesCardValentine';
import { useEffect, useState } from 'react';
import { CARTEGORIES_LIST_ENDPOINT } from '../../constants/endpoints';
import { createRequestPath } from '../../helpers/helpers';
import PageWrapper from '../PageWrapper'


const CategoriesValentine = () => {
    const [data, setData]=useState([]);
    const [fetching, setFetching]=useState(false);
    const [fetchError, setFetchError] = useState(null);

    useEffect(() => {
        setFetching(true);
        fetch(createRequestPath(CARTEGORIES_LIST_ENDPOINT))
        .then(response => response.json())
        .then(resp => {
            setData(resp)
            setFetching(false)
            // console.log(resp)
        })
        .catch(err => {
            setFetching(false)
            setFetchError(err)
        });
    },[])


    return (
        <PageWrapper>
            <div className={styles['common']}>

            {data.map((prod, index)=> {
                // console.log("DATA=>", data)
                const {title, image, priority, urlSlug, id} = prod;
                return (
                    <CategoriesCardValentine
                    title={title}
                    image={image}
                    priority={priority}
                    string={urlSlug}
                    id={id}
                    key={index}
                    />
                    )
            })}

        </div>
        </PageWrapper>
    )
};

export default CategoriesValentine;