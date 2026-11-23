import { useEffect, useState } from "react"
import ProductDetails from "./ProductDetails"


const Products = () => {
    const [products,setProducts] = useState([])

    useEffect(() => {
        const fetchProductData = async() => {
            const data = await fetch('https://dummyjson.com/products')

            const response = await data.json()
            console.log(response?.products);
            const fetchedData = response?.products;
            setProducts(fetchedData);
            
        }

        fetchProductData()
    }, [])
    
   
  return products.length === 0 ? <h3>Loading...</h3> : (
    <div className="product-container">
          <h1>Product List</h1>
          <div className="product-card">
              {
                  products.map((data) => (
                      <ProductDetails key={data.id} productObj={data } />
                  ))
              }
          </div>
    </div>
  )
}

export default Products
