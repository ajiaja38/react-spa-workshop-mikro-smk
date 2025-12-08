import useLocalPrice from "../../hooks/useLocalPrice"
import "./style.css"

const CardPreview = ({ imageUrl, category, title, price, stock }) => {
  return (
    <div className='card-preview'>
      <div className='card-img-wrapper'>
        {imageUrl ? (
          <img src={imageUrl} alt='Preview' />
        ) : (
          <span className='placeholder-text'>Gambar akan muncul disini</span>
        )}
      </div>

      <div className='card-body'>
        <span className='card-cat'>{category || "Kategori"}</span>
        <h3 className='card-title'>{title || "Nama Produk Anda"}</h3>
        <div className='card-details'>
          <span className='card-price'>{useLocalPrice(price)}</span>
          <span className='card-stock'>Stok: {stock || 0}</span>
        </div>
      </div>
    </div>
  )
}

export default CardPreview
