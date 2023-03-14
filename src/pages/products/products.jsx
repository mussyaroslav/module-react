import './products.css';
import Card from '../../components/elements/card/card';
import Header from '../../components/blocks/header/header';

function Products() {
  return (
    <div className='main'>
      <Header />
      <div className='card__div'>
        <div className='container'>
          <div className='card__main'>
            <Card title='Устрицы по рокфеллеровски' description='Значимость этих проблем настолько очевидна, что укрепление и развитие структуры' image='/images/1.png' price='2 700 Р' quantity='500 г.' />
            <Card title='Свиные ребрышки на гриле с зеленью' description='Не следует, однако забывать, что реализация намеченных плановых' image='/images/3.png' price='1 600 Р' quantity='750 г.' />
            <Card title='Креветки по-королевски в лимонном соке' description='Значимость этих проблем настолько очевидна, что укрепление и развитие структуры обеспечивает широкому кругу' image='/images/2.png' price='1 820 Р' quantity='7 шт.' />
            <Card title='Устрицы по рокфеллеровски' description='Значимость этих проблем настолько очевидна, что укрепление и развитие структуры' image='/images/4.png' price='2 700 Р' quantity='500 г.' />
            <Card title='Устрицы по рокфеллеровски' description='Значимость этих проблем настолько очевидна, что укрепление и развитие структуры' image='/images/1.png' price='2 700 Р' quantity='500 г.' />
            <Card title='Свиные ребрышки на гриле с зеленью' description='Не следует, однако забывать, что реализация намеченных плановых' image='/images/2.png' price='1 600 Р' quantity='750 г.' />
            <Card title='Креветки по-королевски в лимонном соке' description='Значимость этих проблем настолько очевидна, что укрепление и развитие структуры обеспечивает широкому кругу' image='/images/3.png' price='1 820 Р' quantity='7 шт..' />
            <Card title='Устрицы по рокфеллеровски' description='Значимость этих проблем настолько очевидна, что укрепление и развитие структуры' image='/images/4.png' price='2 700 Р' quantity='500 г.' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Products;