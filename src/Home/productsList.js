import React from 'react';
import GridList from '@material-ui/core/GridList';
import ProductSingle from './productSingle'

import { ProductsListWrapper } from './productsList.style';

export default class ProductsList extends React.Component {

  render() {
    const { products } = this.props;

    if (!products) {
      return (
        <div>Loading...</div>
      );
    }

    if (products && products.length === 0) {
      return (
        <div>
          No products are here... yet.
        </div>
      );
    }

    if (products && products.length > 0) {
      return (
        <ProductsListWrapper>
          <h3>Products list:</h3>
          <GridList>
            {products.map(product => {
              if ( product.colors.length > 0 ) {
                return <ProductSingle key={product.id} product={product} />;
              }
              return '';
            })}
          </GridList>
        </ProductsListWrapper>
      );
    }

    return '';
  }
}
