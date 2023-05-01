import React from 'react';
import {Link} from "react-router-dom";
import {useSelector , useDispatch} from "react-redux";

//componenets
import Cart from "../components/shared/Cart";


//style
import styles from "./ShopCart.module.css";

//actions
import { checkOut , clear } from '../redux/cart/cartAction';


const ShopCart = () => {

     const state = useSelector(state => state.cartState);
     const dispatch = useDispatch();

     return (
          <div className={styles.container}>
               <div className={styles.cartContainer}>
                    {state.selectedItem.map(item => <Cart key={item.id} data={item}/>)}
               </div>

               {state.itemCounter > 0 && 
                        
                    <div className={styles.payments}>
                         <p><span>Total Items :</span>{state.itemCounter}</p>
                         <p><span>Total Payments :</span>{state.total}</p>
                         <div className={styles.buttonContainer}>
                              <button className={styles.clear} onClick={() => dispatch(checkOut())}>Check Out</button>
                              <button className={styles.checkout} onClick={() => dispatch(clear())}>Clear</button>
                         </div>
                    </div>
                }

                {!state.checkout && state.itemCounter === 0 &&
                    <div className={styles.complete}>
                         <h3>Want To Buy</h3>
                         <Link to="/products">Go To Shop</Link>
                    </div>
                }

               {state.checkout && 
                    <div className={styles.complete}>
                         <h3>Check Out SuccsessFully</h3>
                         <Link to="/products">Buy More</Link>
                    </div>
               }


          </div>
     );
}

export default ShopCart;
