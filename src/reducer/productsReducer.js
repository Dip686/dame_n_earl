const defaultState = {
  activeCategory: 'indian_wear',
  activePage: 1,
  products: {}
};

export default function getProducts(state = defaultState, action) {
  switch (action.type) {
    case 'UPDATE_ACTIVE_CATEGORY': 
      return {...state, activeCategory: action.payload, activePage: 1};
    case 'UPDATE_ACTIVE_PAGE': 
      return {...state, activePage: action.payload};
    case 'SET_PRODUCT_DETAILS':
      let tmpProducts = state.products;
      tmpProducts[action.payload.category] = action.payload.items;
      return {...state, products: tmpProducts};
    default:
      return state;
  }
}
