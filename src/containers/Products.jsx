// import React from 'react';
// // import { useSelector } from 'react-redux';
// import { useStore } from '../hooks-store/store';
// import ProductItem from '../components/Products/ProductItem';
// // import { ProductsContext } from '../Context/ProductsContext';
// import './Products.css';

// const Products = props => {
//   // const productList = useSelector(state => state.shop.products);
// const state = useStore()[0];

//   // const productsList = useContext(ProductsContext).products;
  

//   return (
//     <ul className="products-list">
//       {state.products.map(prod => (
//         <ProductItem
//           key={prod.id}
//           id={prod.id}
//           title={prod.title}
//           description={prod.description}
//           isFav={prod.isFavorite}
//         />
//       ))}
//     </ul>
//   );
// };

// export default Products;


import React from 'react';

import ProductItem from '../components/Products/ProductItem';
import { useStore } from '../hooks-store/store';
import './Products.css';

const Products = props => {
  const state = useStore()[0];
  return (
    <ul className="products-list">
      {state.products.map(prod => (
        <ProductItem
          key={prod.id}
          id={prod.id}
          title={prod.title}
          description={prod.description}
          isFav={prod.isFavorite}
        />
      ))}
    </ul>
  );
};

export default Products;
