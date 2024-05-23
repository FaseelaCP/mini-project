import { useState, useEffect, useContext } from "react";
import ProductCard from "../Product Card/ProductCard";
import CategoryContext from "../../Contexts/CategoryContext";

function ProductList(props) {
  const [productList, setProductList] = useState({});
  const [prodByCategory, setProdByCategory] = useState({});

  const { categoryName } = useContext(CategoryContext);
  const categoryslug = categoryName;
  const loadProducts = () => {
    fetch("https://api.chec.io/v1/products", {
      headers: {
        "X-Authorization": "pk_56914c98cad1cf9c4fc150114c8cfa9896790720fcf52",
      },
    })
      .then((response) => {
        response.json().then((data) => {
          setProductList(data);
        });
      })
      .catch((error) => {
        console.error();
      });
  };

  useEffect(() => {
    loadProducts();
  }, []);

  useEffect(() => {
    fetch("https://api.chec.io/v1/products?category-slug", {
      headers: {
        "X-Authorization": "pk_56914c98cad1cf9c4fc150114c8cfa9896790720fcf52",
      },
    })
      .then((response) => {
        response.json().then((data) => {
          setProdByCategory(data);
        });
      })
      .catch((error) => {
        console.error();
      });
  }, [categoryName]);

  return (
    <>
      <div className="container mt-5 d-flex flex-wrap justify-content-evenly">
        {productList?.data?.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </>
  );
}

export default ProductList;
