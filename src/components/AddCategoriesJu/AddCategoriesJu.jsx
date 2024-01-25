import styles from "./addCategoriesJu.module.css"

import { useContext } from "react";

import { useEffect, useState } from 'react';
import { CARTEGORIES_LIST_ENDPOINT } from '../../constants/endpoints';
import { createRequestPath } from '../../helpers/helpers';
import { ChangeIdContext } from '../../App';

import PageWrapper from '../PageWrapper'
import QueryLoader from '../QueryLoader';
import AddCategoriesJuForm from '../AddCategoriesJuForm';


const AddCategoriesJu = () => {
    const [data, setData] = useState([]);
    const [fetching, setFetching] = useState(false);
    const [fetchError, setFetchError] = useState(null);

    const { setRefetchId, refetchId } = useContext(ChangeIdContext);

    useEffect(() => {
        setFetching(true);
        fetch(createRequestPath(CARTEGORIES_LIST_ENDPOINT))
            .then(response => response.json())
            .then(resp => {
                setData(resp)
                setFetching(false)
            })
            .catch(err => {
                setFetching(false)
                setFetchError(err)
            });
    }, [refetchId])


    return (
        <PageWrapper>
    <QueryLoader fetching={fetching} error={fetchError}>
      <div className={styles['form']}>
        <AddCategoriesJuForm data={data} onSetDeletedId={setRefetchId} />
      </div>
    </QueryLoader>
  </PageWrapper>
    );
};

export default AddCategoriesJu;