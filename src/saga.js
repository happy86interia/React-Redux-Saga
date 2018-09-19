import { all, takeEvery, fork, call, put } from 'redux-saga/effects';
import actions from './actions';
import {
  getCategoriesReq,
  getColorsReq,
  getProductsReq
} from "./service";

export function* getCategories() {
  yield takeEvery(actions.GET_CATEGORIES, function*() {
    try {
      const categories = yield call(getCategoriesReq);
      yield put({ type: actions.PUT_CATEGORIES, categories });
    } catch (error) {
      console.error('getCategories error: ', error);
    }
  });
}

export function* getColors() {
  yield takeEvery(actions.GET_COLORS, function*() {
    try {
      const colors = yield call(getColorsReq);
      yield put({ type: actions.PUT_COLORS, colors });
    } catch (error) {
      console.error('getColors error ', error);
    }
  });
}

export function* getProducts() {
  yield takeEvery(actions.GET_PRODUCTS, function*() {
    try {
      const products = yield call(getProductsReq);
      yield put({ type: actions.PUT_PRODUCTS, products });
    } catch (error) {
      console.error('getProducts error ', error);
    }
  });
}

export function* filterProducts() {
  yield takeEvery(actions.FIL_PRODUCTS, function*({ productsFiltered }) {
    try {
      yield put({ type: actions.ADD_PRODUCTS, productsFiltered });
    } catch (error) {
      console.error('filterProducts error ', error);
    }
  });
}

export default function* rootSaga() {
  yield all([
    fork(getCategories),
    fork(getColors),
    fork(getProducts),
    fork(filterProducts)
  ]);
}
