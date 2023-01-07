import Card from './components/Card.js';
import Header from './components/Header.js';
import Drawer from './components/Drawer.js';

function App() {
  return (
    <div className="wrapper clear">
      <Drawer/>
      <Header/>

      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>Все кроссовки</h1>
          <div className="searchBlock">
            <img src="/img/search.svg" alt="Search" />
            <input placeholder="Поиск..." />
          </div>
        </div>

        <div className="d-flex">
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        </div>

      </div>
    </div>
  );
}

export default App;
