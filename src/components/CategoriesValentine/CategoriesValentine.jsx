import { useContext } from "react";

import styles from './categoriesValentine.module.css';
import CategoriesCardValentine from '../CategoriesCardValentine';
import { useEffect, useState } from 'react';
import { CARTEGORIES_LIST_ENDPOINT } from '../../constants/endpoints';
import { createRequestPath } from '../../helpers/helpers';
import { ChangeIdContext } from '../../App';
import PageWrapper from '../PageWrapper'
import QueryLoader from '../QueryLoader';
import { useDispatch, useSelector } from 'react-redux';
import { DOUBLE_IT } from "../../constants/actions";

const CategoriesValentine = () => {
    const { count } = useSelector(store => store.counter)
    const reduxStore = useSelector(store => store.users.usersCount)
    console.log(reduxStore)
    // console.log(users)

    const [data, setData] = useState([]);
    const [fetching, setFetching] = useState(false);
    const [fetchError, setFetchError] = useState(null);

    const { setRefetchId, refetchId } = useContext(ChangeIdContext);

    const dispatch = useDispatch();

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
    }, [refetchId])

    const onMultCategoriesHandler = () => {
        dispatch({ type: DOUBLE_IT, payload: data.length})
    }

    return (
        <PageWrapper>
            <QueryLoader fetching={fetching} error={fetchError}>
                <h1>{ count }</h1>

                <button onClick={onMultCategoriesHandler}>multiply by 2</button>

                <div className={styles['common']}>

                    {data.map((prod, index) => {
                        // console.log("DATA=>", data)
                        const { title, image, priority, urlSlug, id } = prod;
                        return (
                            <CategoriesCardValentine
                                title={title}
                                image={image}
                                priority={priority}
                                string={urlSlug}
                                id={id}
                                onSetDeletedId={setRefetchId}
                                key={index}
                            />
                        )
                    })}

                </div>
            </QueryLoader>
        </PageWrapper>
    )
};

export default CategoriesValentine;