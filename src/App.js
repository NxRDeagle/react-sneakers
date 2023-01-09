import React from 'react';
import Card from './components/Card';
import Header from './components/Header.js';
import Drawer from './components/Drawer.js';

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [cartIsOpened, setCartOpened] = React.useState(false);

  React.useEffect(() => {
    fetch("https://63bc4615fa38d30d85c2bceb.mockapi.io/items")
      .then((res) => res.json())
      .then((json) => setItems(json))
  }, []);

  const onAddToCart = (obj) => {
    setCartItems((prev) => [...prev, obj]);
  }

  return (
    <div className="wrapper clear">
      {cartIsOpened && <Drawer onCloseCart={() => { setCartOpened(false) }} items={cartItems} />}
      <Header onClickCart={() => { setCartOpened(true) }} />

      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>Все кроссовки</h1>
          <div className="searchBlock">
            <img src="/img/search.svg" alt="Search" />
            <input placeholder="Поиск..." />
          </div>
        </div>

        <div className="d-flex flex-wrap">
          {items.map((item) => (
            <Card
              title={item.title}
              price={item.price}
              imageUrl={item.imageUrl}
              onFavorite={() => console.log("Добавили в закладки")}
              onPlus={(obj) => onAddToCart(obj)}
            />
          ))}
        </div>

      </div>
    </div>
  );
}

export default App;
