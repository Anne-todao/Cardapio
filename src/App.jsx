import ItemCardapio from './components/ItemCardapio';
import './App.css';

function App() {

  return (
    <>
          <h1>Senai Delivery</h1>

          <div className="cards">
              <ItemCardapio nome="Hambúrguer" descricao="Delicioso hambúrguer com queijo e bacon" preco={19.99} />
          </div>

          <div className="cards">
          <ItemCardapio nome="Pizza" descricao="Pizza de calabresa com borda recheada" preco={29.99} />
        </div >

          <div className="cards">
            <ItemCardapio nome="Refrigerante" descricao="Refrigerante gelado de 2 litros" preco={7.99} />
    </div>
    </>
  )
}

export default App
