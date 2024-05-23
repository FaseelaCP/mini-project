import { useParams } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import CartContext from "../../Contexts/CartContext";
import DOMPurify from 'dompurify';

function ProductDetail() {
  const params = useParams();
  const prodId = params.productid;
  const [product, setProduct] = useState({});
  const { cart, fetchCart } = useContext(CartContext);
  const sanitizedDescription = DOMPurify.sanitize(product.description);

  function loadProductsById() {
    fetch(`https://api.chec.io/v1/products/${prodId}`, {
      headers: {
        "X-Authorization": "pk_56914c98cad1cf9c4fc150114c8cfa9896790720fcf52"
      }
    })
      .then((response) => {
        response.json().then((data) => {
          setProduct(data);
          console.log("product by id:", data);
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    loadProductsById();
  }, [prodId]);

  async function onCartClick() {
    try {
      if (product.inventory && product.inventory.available > 0) {
        const response = await fetch(`https://api.chec.io/v1/carts/${cart}`, {
          method: "POST",
          headers: {
            "X-Authorization": "pk_56914c98cad1cf9c4fc150114c8cfa9896790720fcf52",
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            id: product.id,
            quantity: 1
          })
        });
        if (response.ok) {
          await fetchCart(); // Fetch updated cart details
          alert("Product added to cart!");
        } else {
          throw new Error("Failed to add product to cart");
        }
      } else {
        alert("Product is out of stock!");
      }
    } catch (error) {
      console.error("Error adding product to cart:", error.message);
      // Handle the error, e.g., show an error message to the user
    }
  }

  return (
    <div className="container mt-5">
      <div className="row ">
        <div className="col-6">
          {product.assets && (
            <img
              src={product.image.url}
              style={{ width: 400, height: 400 , objectFit: 'cover' }}
              alt="Product Image"
            />
          )}
          {!product.assets && <div>Loading image...</div>}
        </div>
        <div className="col-6" style={{ width: 400 }}>
          <h2>{product.name}</h2>
          <p className="card-text" dangerouslySetInnerHTML={{ __html: sanitizedDescription }}></p>
        
          <h3>
            <span>$</span>
            {product.price && product.price.raw}
          </h3>
          <button className="btn btn-dark mt-5" onClick={onCartClick}>
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
