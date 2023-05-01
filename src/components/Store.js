import React ,{useEffect} from 'react';
import {useSelector , useDispatch} from "react-redux";

//action
import {fetchProducts} from "../redux/products/productsAction";

//components
import Product from './shared/Product';
import Loader from '../components/Loader';

//style
import styled from "./Store.module.css";

const Store = () => {

     const productsState = useSelector(state => state.productsState);
     const dispatch = useDispatch();

     useEffect(() => {

          if(!productsState.products.length)dispatch(fetchProducts())
   
     }, []);

     return (
          <div className={styled.container}>

                {productsState.loading?

                    <Loader/>

                    :

                    productsState.error ?
                         
                         <h2>{productsState.error}</h2>    

                    :

                    productsState.products.map(product => (
                         <Product key={product.id} productData={product}/>
                    ))
                
                }
          </div>
     );
}

export default Store;
