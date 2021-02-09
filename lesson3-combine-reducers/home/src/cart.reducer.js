import { ADD_PRODUCT, REMOVE_PRODUCT } from './cart.actions';

const initialSstate = {
  products: [],
};

const cartReducer = (state = initialSstate, action) => {
  switch (action.type) {
   case ADD_PRODUCT: {
      return {
        ...state,
        products: state.products.concat(action.payload),
      };
    }
    case REMOVE_PRODUCT: {
      const newList = state.products.filter(prod => prod.id !== action.payload);
      return {
        ...state,
        products: newList,
      };
    }
    default:
      return state;
  }
};

export default cartReducer;
