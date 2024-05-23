import { Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import { Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage';
import Footer from './Components/Footer/Footer';
import {  useEffect, useState } from 'react';
import CategoryContext from './Contexts/CategoryContext';
import AboutUs from './Pages/AboutUs/AboutUs';
import ContactUs from './Pages/ContactUs/ContactUs'
import LoginPage from './Pages/Login/LoginPage';

import ProductList from './Components/ProductList/ProductList';
import CartPage from './Pages/CartPage/CartPage';
import SearchPage from './Pages/Search/SearchPage';
import ProductDetail from './Pages/ProductDetail/ProductDetail';
import NotFound from './Components/NotFound/NotFound';
import Category from './Pages/Category/Category';
import CartContext from './Contexts/CartContext';



function App() {
 

  const [categories,setCategories]=useState([])
  const [searchText,setSearchText]=useState('')
  const [cartItems,setCartItems]=useState([]);
  const [cartid, setCartid] = useState(null);

  

  useEffect(() => {
    fetchCartId();
  }, []);
  const fetchCartId = async () => {
    try {
      const response = await fetch("https://api.chec.io/v1/carts", {
        headers: {
          "X-Authorization": "pk_56914c98cad1cf9c4fc150114c8cfa9896790720fcf52"
        }
      });
      if (response.ok) {
        const cartData = await response.json();
        setCartid(cartData.id);
      } else {
        throw new Error("Failed to fetch cart ID");
      }
    } catch (error) {
      console.error("Error fetching cart ID:", error);
    }
  };

 
  
  useEffect(()=>{  loadCategories();},[])
  function loadCategories(){

  fetch('https://api.chec.io/v1/categories',{
        headers:{'X-Authorization': 'pk_56914c98cad1cf9c4fc150114c8cfa9896790720fcf52'}  
  }).then((response)=>{
  response.json().then((data)=>{
      setCategories(data)
  })
}).catch((error) => {
        console.error('Error fetching categories:', error);
})}

function handleSearchClick(text){
setSearchText(text)
}



const [categoryName,setCategoryName]=useState('')
const handleCategoryClick = (name) => {
  setCategoryName(name);
};



function onAddToCartClick(Item, currentCartItems) {
  if(!cartid){
    setCartItems(Item)
  }
  else{
    if(Item.id==cartItems.id){
      
    }
  setCartItems([...currentCartItems, Item]); // Add the item to the new array
}
}


function updateCartItemQuantity(itemId, quantity) {
  const updatedCartItems = cartItems.map((item) => {
    if (item.id === itemId) {
      // Update quantity for the matching item
      return { ...item, quantity };
    } else {
      return item;
    }
  })

  // Update cart items state with updated quantities
  setCartItems(updatedCartItems);
 
}




  return (
    <div className="App">
      <CategoryContext.Provider value={{
        categories:categories, 
        categoryName,
        handleCategoryClick:handleCategoryClick
        
      }}>
        <CartContext.Provider value={{
          cartid:cartid,
          cartItems:cartItems,
          onAddToCartClick:onAddToCartClick,
          updateCartItemQuantity:updateCartItemQuantity
        }}>
      <Header handleSearchClick={handleSearchClick}></Header>
      
      <Routes>
        <Route path='/search' element={<SearchPage searchText={searchText}/>}></Route>
        <Route path='/' element={<HomePage  />}></Route>
        <Route path='/login' element={<LoginPage/>}></Route>
        <Route path='/cart/:cartid' element={<CartPage/>}></Route>
        <Route path='*' element={<NotFound/>}></Route> 
        <Route path='/category/:categoryname' element={<Category/>}></Route>     
        <Route path='/products' element={<ProductList />}></Route>
        <Route path='/products/:productid' element={<ProductDetail/>}></Route> 
        <Route path='/aboutus' element={<AboutUs/>}></Route>
        <Route path='/contactus' element={<ContactUs/>}></Route>
        </Routes> 
        </CartContext.Provider>
        
        <Footer/>
       
        </CategoryContext.Provider >
        
        
            </div>
  );
}

export default App;
