export const ADD_PRODUCT = 'CART/ADD_PRODUCT';
export const REMOVE_PRODUCT = 'CART/REMOVE_PRODUCT';

export const addProduct = prod => {
  return {
    type: ADD_PRODUCT,
    payload: prod,
  };
};

export const removeProduct = prodId => {
  return {
    type: REMOVE_PRODUCT,
    payload: prodId,
  };
};