import { Link } from "react-router-dom";


const VanCard = ({ vanObj }) => {
    const { imageUrl,name,price,type ,id} = vanObj;
  return (
    <div className="van-info">
      <Link to={`/vans/${id}`}>
        <img src={imageUrl} alt={name} className="van-img" />
        <div className="van-desc">
          <p>{name}</p>
          <p>${price} /day</p>
        </div>
        <button className="btn-type">{type}</button>
      </Link>
    </div>
  );
}

export default VanCard
