import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Navigation from './components/Nav/Navigation';
import ProductsPage from './containers/Products';
import FavoritesPage from './containers/Favorites';
import Counter from './containers/Counter';

const App = props => {
  return (
    <React.Fragment>
      <Navigation />
      <main>
        <Routes>
        <Route path="/" element={<ProductsPage/>} />
        <Route path="/favorites" element={<FavoritesPage/>} />
      </Routes>
      <Counter/>
      </main>
    </React.Fragment>
  );
};

export default App;
