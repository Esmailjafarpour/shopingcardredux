import React from 'react';
import {useDispatch} from "react-redux";

//function
import {shorten} from '../../helper/function';

//Icons
import trashIcon from "../../assets/icons/trash.svg";

//style
import styles from "./Cart.module.css";

//actions
import { removeItem , increase , decrease } from '../../redux/cart/cartAction';

const Cart = (props) => {

     const dispatch = useDispatch();
     const {image , title , price , quantity} = props.data

     return (
          <div className={styles.container}>
              <img className={styles.productImage} src={image} alt="product" style={{width : "50px"}}/>
              <div className={styles.data}>
                    <h3>{shorten(title)}</h3>
                    <p>{price}</p>
              </div>
              <div className={styles.data}>
                    <span className={styles.quantity}>{quantity}</span>
              </div>
               <div className={styles.buttonContainer}>

                    {
                         quantity > 1 ? 
                              <button onClick={() => dispatch(decrease(props.data))}>-</button>
                         :
                              <button onClick={() => dispatch(removeItem(props.data))}>
                                   <img src={trashIcon} alt="trashIcon"/>
                              </button>

                    }

                    <button className={styles.button} onClick={() => dispatch(increase(props.data))}>+</button>

                    
               </div>
          </div>
     );
}

export default Cart;
