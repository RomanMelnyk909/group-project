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
    console.log("data", data)

    useEffect(() => {
        setFetching(true);
        fetch(createRequestPath(CARTEGORIES_LIST_ENDPOINT))
        .then(response => response.json())
        .then(resp => {
            setData(resp)
            setFetching(false)
            console.log(resp)
        })
        .catch(err => {
            setFetching(false)
            setFetchError(err)
        });
    },[])


    return (
        <PageWrapper>
            <div className={styles['common']}>
            {/* <CategoriesCard /> */}
            {data.map((prod, id)=> {
                const {title, image, priority } = prod;
                return (
                    <CategoriesCardValentine
                    title={title}
                    image={image}
                    priority={priority}
                    // id={id}
                    key={id}
                    />
                )
            })}
        </div>
        </PageWrapper>
    )
};

export default CategoriesValentine;