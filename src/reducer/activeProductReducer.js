const defaultProduct = {activeProduct: null};
export default function productReducer(state = defaultProduct, action) {
  switch(action.type) {
    case 'ADD_ACTIVE_ITEM': return {...state, activeProduct: action.payload};
    default:
      return state;
  }
}
