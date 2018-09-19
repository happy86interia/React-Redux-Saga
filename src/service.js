import { get } from './api';

export const getCategoriesReq = () => get('categories');

export const getColorsReq = () => get('colors');

export const getProductsReq = () => get('products');
