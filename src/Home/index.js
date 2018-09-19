import React from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import actions from '../actions';
import Filter from './filter';
import ProductsList from './productsList';
import { HomeWrapper } from './home.style.js';

import './index.css';

const { getColors, getCategories, getProducts, filterProducts } = actions;

class Home extends React.Component {
  constructor(props) {
    super(props);

    props.getColors();
    props.getCategories();
    props.getProducts();
  }

  reduceProducts = (key, values) => {
    const { products, filterProducts } = this.props;

    const productsFiltered = [];

    products.map(product => {
      let searchArray = null;

      if ( key === 'colors' ) {
        searchArray = product[key];
      }

      if ( key === 'category' ) {
        searchArray = [product[key]];
      }

      const filteredArray = searchArray.filter(function(element) {
        return values.indexOf(element.toString()) !== -1;
      });

      if ( filteredArray.length > 0 ) {
        productsFiltered.push(product);
      }

      return '';
    });
    filterProducts(productsFiltered);
  }

  render() {
    const { colors, products, productsFiltered } = this.props;

    return (
      <HomeWrapper>
        <Grid className="contentWrapper" container justify="center" spacing={16}>
          <Grid id="homeContent" item xs={12} >
            <Filter
              colors={colors}
              filterResult={this.reduceProducts}
            />
            <ProductsList
              products={productsFiltered && productsFiltered.length > 0 ? productsFiltered : products}
            />
          </Grid>
        </Grid>
      </HomeWrapper>
    );
  }
}

function mapStateToProps(state) {
  return {
    colors: state.colors,
    categories: state.categories,
    products: state.products,
    productsFiltered: state.productsFiltered
  };
}

export default connect(mapStateToProps, {
  getColors,
  getCategories,
  getProducts,
  filterProducts
})(Home);
