import { useParams } from "react-router-dom";
import CategoryContext from "../../Contexts/CategoryContext";
import { useState,useEffect, useContext } from "react";


import ProductCard from "../../Components/Product Card/ProductCard";
import './Category.css'

function Category() {
  const [productList,setProductList]=useState([])
   const params=useParams();
   console.log(params)
  

  function loadProductsByCategory(){
    fetch(`https://api.chec.io/v1/products?category_slug=${params.categoryname}`,{
      headers:{
        'X-Authorization':'pk_56914c98cad1cf9c4fc150114c8cfa9896790720fcf52'
      }
    }).then((response)=>{
      response.json().then((data)=>{
        setProductList(data)
        console.log("category based products",data)
      }).catch((error)=>{
        console.log(error)
      })
    }).catch((error)=>{
      console.log(error)
  })}
  useEffect(()=>{
    loadProductsByCategory();
  },[params])
  
  return ( <div className="mt-5 category-page">
    <div className="text-center">
      <h1>{params.categoryname}</h1>
     
    </div>
    <div className="container mt-5 d-flex flex-wrap justify-content-evenly">  {/* Added justify-content-evenly for even distribution */}
        {productList?.data?.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>

  </div> );

 
}

export default Category;