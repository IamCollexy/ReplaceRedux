import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom';

//...  custom hook 
import configureProductsStore from './hooks-store/product-store';
import configureCounterStore from './hooks-store/counter-store';

configureProductsStore();
configureCounterStore();

//..............Using React Redux
// import { Provider } from 'react-redux';
// import { combineReducers, createStore } from 'redux';
// import productReducer from './store/reducers/products';


// context
// import ProductsProvider from './Context/ProductsContext';

//..............Using React Redux
// const rootReducer = combineReducers({
//   shop: productReducer,
// });

// const store = createStore(rootReducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <ProductsProvider store={store}>
  // <ProductsProvider >
    <BrowserRouter>
      <App />
    </BrowserRouter>
  /* </ProductsProvider> */
);

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// )
