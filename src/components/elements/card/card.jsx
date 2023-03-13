import './card.css';

function Card({title, description, price, time, image}) {
  return (
    <div className='product__card'>
      <div className='product__img__div'>
        <img alt='' className='product__img' src={image} />
      </div>
      <div className='product__title'>
        <p>{title}</p>
      </div>
      <div className='product__description'>
        <p>{description}</p>
      </div>
      <div className='price__btn'>
        <div className='price__div'>
          <p className='price'>{price}</p>
          <p className='slash'>&nbsp; / &nbsp;</p>
          <p className='time'>{time}</p>     
        </div>
        <div className='btn__plus'>
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M7 1.28564V12.3571" stroke="white" stroke-width="2" stroke-linecap="round"/>
            <path d="M12.3569 6.82135L1.28551 6.82135" stroke="white" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </div>
      </div>
    </div>
  )
}

export default Card;