import './card.css';

import { addProductsBasket } from '../../../store/reducers/products';
import { useDispatch } from 'react-redux';
import uuid from 'react-uuid';

function Card({id, title, description, price, quantity, image}) {

  const dispatch = useDispatch()

  const addProduct = () => {
    const item = {
      id: id,
      idx: uuid(),
      image: image,
      title: title,
      price: price
    }

    dispatch(addProductsBasket(item))
  }

  return (
    <div className='product__card'>
      <div className='product__img__div'>
        <img alt='' className='product__img' src={image} />
      </div>
      <div className='product__title'>
        <a href='https://vk.com/yas1ck'>{title}</a>
      </div>
      <div className='product__description'>
        <p>{description}</p>
      </div>
      <div className='price__btn'>
        <div className='price__div'>
          <p className='price'>{price} ₽</p>
          <p className='slash'>&nbsp; / &nbsp;</p>
          <p className='time'>{quantity} г.</p>     
        </div>
        <button onClick={addProduct} className='btn__plus'>
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M7 1.28564V12.3571" stroke="white" strokeWidth="2" strokeLinecap="round"/>
            <path d="M12.3569 6.82135L1.28551 6.82135" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>
      </div>
    </div>
  )
}

export default Card;