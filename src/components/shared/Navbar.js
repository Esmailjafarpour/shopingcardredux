import React  from 'react';
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";


//icons
import shopIcons from "../../assets/icons/shop.svg";

//style
import styled from "./Navbar.module.css";

const Navbar = () => {

     const cartState = useSelector(state => state.cartState)

     return (
          <div className={styled.mainContainer}>
               <div className={styled.container}>
                    <Link className={styled.productLink} to="/products">Products</Link>
                     <div className={styled.iconContainer}>
                         <Link to="/shopcart"><img src={shopIcons} alt="shopIcons"/></Link>
                         <span>{cartState.itemCounter}</span>
                    </div>
               </div>
              
          </div>
     );
}

export default Navbar;
