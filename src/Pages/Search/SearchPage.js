import { useEffect, useState } from "react";
import ProductCard from "../../Components/Product Card/ProductCard";
import './Search.css'

function Search(props) {
 
  const [productList,setProductList]=useState([]);
  const searchText=props.searchText;
 

  useEffect(()=>{
    loadProductsBySearch();
  },[searchText])
 
  function loadProductsBySearch(){
    fetch('https://api.chec.io/v1/products?query=searchText',{
      headers:{
        'X-Authorization':'pk_56914c98cad1cf9c4fc150114c8cfa9896790720fcf52'
      }
    }).then((response)=>{
      response.json().then((data)=>{
        console.log("searcg",data)
       setProductList(data)
      })
    }).catch(error => {
      console.error('Error fetching products:', error);})}
    
   
 
  
  return (
  <div className="search container mt-5 d-flex flex-wrap justify-content-evenly" >
    {
      productList.length > 0 ?
      productList.map(p => <ProductCard key={p.id} product={p} />)
      : (<h1>No Search Results Found</h1>)
    }
  

  </div>
   ) ;
}

export default Search;