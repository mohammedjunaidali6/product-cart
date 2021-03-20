import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Products from './Products';
import Cart from './Cart';

const PAGE_PRODUCTS = 'products';
const PAGE_CART = 'cart';

function App() {

  const [cart, setCart] = useState([]);
  const [page, setPage] = useState('PAGE_PRODUCTS');

  const addcart = (post) => {
    setCart([...cart, post]);
  }
  const removecart = (postToRemove) => {
    setCart(
      cart.filter((post) => post !== postToRemove))
  }
  const navigateTo = (nextPage) => {
    setPage(nextPage);
  }
  return (
    <div className="App">
      <button onClick={() => navigateTo(PAGE_CART)}>Go to Cart({cart.length})</button>
      <button onClick={() => navigateTo(PAGE_PRODUCTS)}>View Products</button>
      <div className="posts">
      {page === PAGE_PRODUCTS && (<Products addcart={addcart}/>)} 
      {page === PAGE_CART && (<Cart cart={cart}  removecart={removecart}/>)}
      </div>
    </div>
  );
}
export default App;