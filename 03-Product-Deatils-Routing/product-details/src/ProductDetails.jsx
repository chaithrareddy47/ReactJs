
import {Link} from "react-router-dom"
const ProductDetails = ({ productObj }) => {
    const { images,title,description,id } = productObj;
  return (
    <div className="product-details">
      <img src={images} alt={title} className="product-img" />
      <h4>{title}</h4>
      <p>{description}</p>
      <Link to={`/productview/${id}`} className="product-link">
        View More
      </Link>
    </div>
  );
}

export default ProductDetails
