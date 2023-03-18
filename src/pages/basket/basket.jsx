import { useSelector } from 'react-redux';

import CardBasket from '../../components/elements/cardBasket/cardBasket';
import HeaderBasket from '../../components/elements/blocks/header-basket/header-basket';
import FooterBasket from '../../components/elements/blocks/footer-basket/footer-basket';

function Basket() {

  const productsBasket = useSelector(state => state.products.basketProducts)

  return (
    <div className="main">
      <HeaderBasket />
      <div className='basket__main'>
        <div className='container__basket'>
          <div className='basket__div'>
            {productsBasket.map(item => {
              return (
                <CardBasket
                  key={item.idx}
                  id={item.idx}
                  image={item.image}
                  title={item.title}
                  price={item.price}
                />
              )
            })}
          </div>
        </div>
      </div>
      <FooterBasket />
    </div>
  )
}

export default Basket;