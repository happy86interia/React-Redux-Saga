
const actions = {
  GET_COLORS: 'GET_COLORS',
  GET_CATEGORIES: 'GET_CATEGORIES',
  GET_PRODUCTS: 'GET_PRODUCTS',
  PUT_COLORS: 'PUT_COLORS',
  PUT_CATEGORIES: 'PUT_CATEGORIES',
  PUT_PRODUCTS: 'PUT_PRODUCTS',
  FIL_PRODUCTS: 'FIL_PRODUCTS',
  ADD_PRODUCTS: 'ADD_PRODUCTS',
  getColors: () => {
    return (dispatch) => {
      dispatch({
        type: actions.GET_COLORS
      });
    }
  },
  getCategories: () => {
    return (dispatch) => {
      dispatch({
        type: actions.GET_CATEGORIES
      });
    }
  },
  getProducts: () => {
    return (dispatch) => {
      dispatch({
        type: actions.GET_PRODUCTS
      });
    }
  },
  filterProducts: productsFiltered => {
    return (dispatch) => {
      dispatch({
        type: actions.FIL_PRODUCTS,
        productsFiltered
      });
    }
  }
};

export default actions;
