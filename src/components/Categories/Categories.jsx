import styles from './categories.module.css';
import CategoriesCard from '../CategoriesCard';
import { useEffect, useState, useContext } from 'react';
import { createRequestPath } from "../../helpers/helpers";
import { CARTEGORIES_LIST_ENDPOINT } from "../../constants/endpoints";
import {ChangeIdContext} from "../../App"
import { DECREMENT, INCREMENT, PLUS_NUMBER, RESET } from '../../constants/actions';
import { counterReducer } from '../../reducers/counterReducer';
import { useDispatch, useSelector } from 'react-redux';

 
const Categories = (props) => {
    const { flagReverse, buttonFlag} = props;
    let {refetchId, setRefetchId}=useContext(ChangeIdContext) 
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
    }, [refetchId])


    let flagToReverse = flagReverse || false;
    let dispath=useDispatch();

    let [number, setNumber] = useState(0)
    let redux =useSelector(state=>state)
    console.log(redux);
    return (

        <div className={styles['categories']}>
            <button onClick={()=>
            {
                dispath({type:INCREMENT});
            }}>+</button>
			<button onClick={()=> dispath({type:DECREMENT})}>-</button>
            <input type={'number'} onChange={(e)=>setNumber(+e.target.value) }/>
            <button onClick={()=> dispath({type:PLUS_NUMBER, payload:number})}>plus num</button>
            <button onClick={()=> dispath({type:RESET})}>reset</button>

            {
                !flagToReverse ?
                    data.slice(0).reverse().map((el) => {
                        return <CategoriesCard key={el.id} priority={el.priority} id={el.id} title={el.title} image={el.image} string={el.urlSlug} onSetDeletedId={setRefetchId} buttonFlag={buttonFlag}/>
                    }) :
                    data.map((el) => {
                        return <CategoriesCard key={el.id} priority={el.priority} id={el.id} title={el.title} image={el.image} string={el.urlSlug} onSetDeletedId={setRefetchId} buttonFlag={buttonFlag}/>
                    })
            }

        </div>

    )
};

export default Categories;