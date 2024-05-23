import './ProductCard.css'
import { Link, useParams } from 'react-router-dom';

import { useContext, useState } from 'react';
import CartContext from '../../Contexts/CartContext';
import DOMPurify from 'dompurify';

function ProductCard(props) {
  const { onAddToCartClick, cartItems } = useContext(CartContext); 
  
  
  const product = props.product;

  const handleAddToCart = () => {
    console.log("product added",product)
    onAddToCartClick(product,cartItems); 
  };
  const sanitizedDescription = DOMPurify.sanitize(product.description);


  return (
    <div className="product-card">
      <div className="card">
      <Link to={`/products/${product.id}`}><img src={product.image.url} className="card-img-top" alt="..." /></Link>
        <div className="card-body">
          <Link to={`/products/${product.id}`}><h5 className="card-title">{product.name}</h5></Link>
          <p className="card-text" dangerouslySetInnerHTML={{ __html: sanitizedDescription }}></p>
        
        </div>
        <div className="card-body">
          <button className="card-link btn btn-dark" onClick={handleAddToCart}>Add To Cart</button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
