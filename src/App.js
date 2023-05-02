import './App.css';


//react-router-dom V6
import {Route,Routes,Navigate} from "react-router-dom";
import { Provider } from 'react-redux';

//components
import Store from './components/Store';
import ProductDetails from './components/ProductDetails';
import Navbar from './components/shared/Navbar';
import ShopCart from './components/shopCart';

//redux
import store from './redux/store';



function App() {

  return (

      <Provider store={store}>
          <Navbar/>
          <Routes>
            <Route path="/products/:id" element={<ProductDetails/>}/>
            <Route path="/products" element={<Store/>}/>
            <Route path="/shopcart" element={<ShopCart/>}/>
            <Route path="/*" element={<Navigate to="/products"/>}/>
          </Routes>
        </Provider>  
  )

}

export default App;
