import './basket.css'

import CardBasket from '../../components/elements/cardBasket/cardBasket';

function Basket() {
  return (
    <div className="main-basket">
      <header className='header__basket'>
        <div className='container__basket'>
          <div className='header__basket__main'>
            <button className='btn__busket__back'>
            <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11" fill="none">
              <g clipPath="url(#clip0_7057_4)">
              <path d="M3.65166 2.04683C3.787 1.91149 4.00007 1.91149 4.13541 2.04683C4.26618 2.1776 4.26618 2.39524 4.13541 2.5257L1.68253 4.97859H9.77672C9.9654 4.97859 10.1202 5.12856 10.1202 5.31725C10.1202 5.50593 9.9654 5.66078 9.77672 5.66078H1.68253L4.13541 8.10909C4.26618 8.24443 4.26618 8.46238 4.13541 8.59284C4.00007 8.72818 3.787 8.72818 3.65166 8.59284L0.618095 5.55927C0.487328 5.42851 0.487328 5.21086 0.618095 5.0804L3.65166 2.04683Z" fill="#D58C51"/>
              </g>
              <defs>
              <clipPath id="clip0_7057_4">
              <rect width="9.6" height="9.6" fill="white" transform="translate(0.52002 0.520004)"/>
              </clipPath>
              </defs>
            </svg>  
            </button>
            <h1>Корзина с выбранными товарами</h1>
          </div>
        </div>
      </header>
      <div className='basket__main'>
        <div className='container__basket'>
          <div className='basket__div'>
            <CardBasket image='/images/5.png' title='Устрицы по рокфеллеровски' price='2 700 Р' />
            <CardBasket image='/images/6.png' title='Креветки по-королевски в лимонном соке' price='1 820 Р' />
            <CardBasket image='/images/7.png' title='Свиные ребрышки на гриле с зеленью' price='1 600 Р' />
          </div>
        </div>
      </div>
      <footer className='footer__basket'>
        <div className='container__basket'>
          <div className='footer__basket__div'>
            <div className='footer__price__div'>
              <h2>Заказ на сумму:</h2>
              <p>6 220 ₽</p>
            </div>
            <button className='footer__btn'>
              Оформить заказ
            </button>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Basket;