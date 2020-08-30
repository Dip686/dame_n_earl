const defaultCartState = {
   123 : {
    quantity: 2,
    url: 'resources/products/earrings/1.jpeg',
    header: 'Earring',
    currency: '₹',
    price: '1000',
    currentPrice: '900',
    discountAmount: '100',
    discountPercentage: '10',
    rating: '4.5',
    maxRating: '5'
  },
  234: {
    quantity: 3,
    url: 'resources/products/earrings/1.jpeg',
    header: 'Earring',
    currency: '₹',
    price: '1000',
    currentPrice: '900',
    discountAmount: '100',
    discountPercentage: '10',
    rating: '4.5',
    maxRating: '5'
  },
  2334: {
    quantity: 3,
    url: 'resources/products/earrings/1.jpeg',
    header: 'Earring',
    currency: '₹',
    price: '1000',
    currentPrice: '900',
    discountAmount: '100',
    discountPercentage: '10',
    rating: '4.5',
    maxRating: '5'
  },
  23334: {
    quantity: 3,
    url: 'resources/products/earrings/1.jpeg',
    header: 'Earring',
    currency: '₹',
    price: '1000',
    currentPrice: '900',
    discountAmount: '100',
    discountPercentage: '10',
    rating: '4.5',
    maxRating: '5'
  }
};

export default function cartReducer (state = defaultCartState, action) {
  let tmpState = {...state};

  switch (action.type) {
    case 'REMOVE_ITEM_FROM_CART': if (tmpState[action.payload]) {
      delete tmpState[action.payload];
    }
    return tmpState;
    case 'INCREMENT_ITEM_FROM_CART': if (tmpState[action.payload]) {
      tmpState[action.payload].quantity++;
    }
    return tmpState;
    case 'DECREMENT_ITEM_FROM_CART': if (tmpState[action.payload]) {
      tmpState[action.payload].quantity = Math.max(0,tmpState[action.payload].quantity - 1);
    }
    return tmpState;
    default:
      return tmpState;
  }
}