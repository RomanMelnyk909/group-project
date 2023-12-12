import styles from './categories.module.css';
import CategoriesCard from '../CategoriesCard';
import { useEffect, useState } from 'react';
import { CARTEGORIES_LIST_ENDPOINT } from '../../constants/endpoints';
import { createRequestPath } from '../../helpers/helpers';
import PageWrapper from '../PageWrapper'


const Categories = () => {
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
                    <CategoriesCard
                    title={title}
                    image={image}
                    // id={id}
                    key={id}
                    />
                )
            })}
        </div>
        </PageWrapper>
    )
};

export default Categories;