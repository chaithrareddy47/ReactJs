
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom";

const ProductView = () => {

    const params = useParams();
    console.log(params);
    
    const [productsView,setProductsView] = useState([])
    
    useEffect(() => {
            const fetchProductData = async() => {
                const data = await fetch(`${"https://dummyjson.com/products/"}${params.id}`)
    
                const response = await data.json()
                console.log(response);
                setProductsView(response)
                
            }
    
            fetchProductData()
    }, [])
    const { title, images, description, price } = productsView;
  return (
    <div className="productview">
      <h1>{title}</h1>
      <img src={images} alt={title} />
      <p>{description}</p>
          <p className="price"><strong>Price:</strong>{price}</p>
          <Link to="/product" className="link-l">Back to Products</Link>
    </div>
  );
}

export default ProductView
