import { useEffect, useState } from "react";
import ProductList from "./ProductList";

const ProductDetails = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("https://dummyjson.com/products");
      // console.log(data);

      const response = await data.json();
      // console.log(response);

      setProducts(response?.products ?? []);
    };

    fetchData();
  }, []);

  return (
    <div className="product">
      <h1>Product List</h1>
      <div className="product-list">
        {products.map((items) => (
          <ProductList key={items?.id} productList={items} />
        ))}
      </div>
    </div>
  );
};

export default ProductDetails;
