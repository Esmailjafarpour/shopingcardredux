import React from 'react';
import spinner from '../gif/Spinner.gif';


const Loader = () => {
     return (
          <div style={{width : "100%" , textAlign :"center"}}>
               <img src={spinner} alt="loading"/>
          </div>
     );
}

export default Loader;
