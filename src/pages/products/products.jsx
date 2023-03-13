import './products.css';
import Card from '../../components/elements/card/card';
import Header from '../../components/blocks/header/header';
import cardImage1 from '../../components/elements/card/images/1.png'
import cardImage2 from '../../components/elements/card/images/2.png'
import cardImage3 from '../../components/elements/card/images/3.png'
import cardImage4 from '../../components/elements/card/images/4.png'

function Products() {
  return (
    <div>
      <Header />
      <div className='card__div'>
        <div className='container'>
          <div className='card__main'>
            <Card title='Устрицы по рокфеллеровски' description='Значимость этих проблем настолько очевидна, что укрепление и развитие структуры' image={cardImage1} price='2 700 Р' time='500 г.' />
            <Card title='Свиные ребрышки на гриле с зеленью' description='Не следует, однако забывать, что реализация намеченных плановых' image={cardImage2} price='1 600 Р' time='750 г.' />
            <Card title='Креветки по-королевски в лимонном соке' description='Значимость этих проблем настолько очевидна' image={cardImage3} price='1 820 Р' time='7 шт.' />
            <Card title='Устрицы по рокфеллеровски' description='Значимость этих проблем настолько очевидна, что укрепление и развитие структуры' image={cardImage4} price='2 700 Р' time='500 г.' />
            <Card title='Устрицы по рокфеллеровски' description='Значимость этих проблем настолько очевидна, что укрепление и развитие структуры' image={cardImage1} price='2 700 Р' time='500 г.' />
            <Card title='Свиные ребрышки на гриле с зеленью' description='Не следует, однако забывать, что реализация намеченных плановых' image={cardImage2} price='1 600 Р' time='750 г.' />
            <Card title='Креветки по-королевски в лимонном соке' description='Значимость этих проблем настолько очевидна' image={cardImage3} price='1 820 Р' time='7 шт..' />
            <Card title='Устрицы по рокфеллеровски' description='Значимость этих проблем настолько очевидна, что укрепление и развитие структуры' image={cardImage4} price='2 700 Р' time='500 г.' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Products;