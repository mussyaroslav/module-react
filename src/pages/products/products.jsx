import './products.css';
import { PRODUCTS } from '../../products';
import Card from '../../components/elements/card/card';
import Header from '../../components/blocks/header/header';

function Products() {
  return (
    <div className='main'>   
      <Header />
      <div className='card__div'>
        <div className='container'>
          <div className='card__main'>
            {PRODUCTS.map(item => {
              return (
                <Card 
                  key={item.id}
                  image={item.image}
                  title={item.title}
                  description={item.description}
                  price={item.price}
                  quantity={item.quantity}
                />
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Products;