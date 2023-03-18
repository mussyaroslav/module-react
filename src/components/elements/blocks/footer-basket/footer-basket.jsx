import Button from '../../../ui/button/button'
import { useSelector } from 'react-redux';
import './footer-basket.css'

function FooterBasket() {

  const productsPrice = useSelector(state => state.products.allPriceProductsBasket)

  return (
    <footer className='footer__basket'>
        <div className='container__basket'>
          <div className='footer__basket__div'>
            <div className='footer__price__div'>
              <h2>Заказ на сумму:</h2>
              <p>{productsPrice} ₽</p>
            </div>
            <Button className='footer__btn' name='Оформить заказ'/>
          </div>
        </div>
      </footer>
  )
}

export default FooterBasket