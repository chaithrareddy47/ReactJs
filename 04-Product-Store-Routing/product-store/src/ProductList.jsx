

const ProductList = ({ productList }) => {
    console.log(productList);
    const { images, title, description } = productList;
    
    return (
      <div className="product-card">
        <img src={images} className="product-img" />
            <h4>{title}</h4>
            <p className="product-desc">{description}</p>
            <p className="product-link">View More</p>
      </div>
    );
};

export default ProductList
