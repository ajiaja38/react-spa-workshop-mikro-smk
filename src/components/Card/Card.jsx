import { ShoppingBasket } from "lucide-react"
import "./style.css"
import useLocalPrice from "../../hooks/useLocalPrice"

const Card = ({ id, imgUrl, category, title, price }) => {
  return (
    <div className='product-card'>
      <div className='card-image'>
        <img src={imgUrl} alt={title} />
      </div>
      <div className='card-content'>
        <span className='category'>{category}</span>
        <h3 className='product-title'>{title}</h3>
        <div className='card-footer'>
          <span className='price'>{useLocalPrice(price)}</span>
          <a href={`/product/${id}`} style={{ textDecoration: "none" }}>
            <button className='btn-add'>
              <ShoppingBasket />
              Detail
            </button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Card
