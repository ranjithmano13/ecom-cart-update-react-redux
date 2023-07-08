import { Routes,Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import { Cart, NavBar} from './components';
import { Product } from './container';
import { Provider } from 'react-redux';
import store from './store/store'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Provider store={store}>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Product/>} ></Route>
        <Route path='/cart' element={<Cart/>} ></Route>
      </Routes>
      </Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
