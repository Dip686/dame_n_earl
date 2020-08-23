const defaultState = {
  activeCategory: 'indian_wear',
  products: {
    'indian_wear': {
      count: 2,
      items: [
        {
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
        {
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
      ]
    },
    'western_wear': {
      count: 3,
      items: [
        {
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
        {
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
        {
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
      ]
    },
    'earrings': {
      count: 10,
      items: [
        {
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
        {
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
        {
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
        {
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
        {
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
        {
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
        {
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
        {
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
        {
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
        {
          url: 'resources/products/earrings/1.jpeg',
          header: 'Earring',
          currency: '₹',
          price: '1000',
          currentPrice: '900',
          discountAmount: '100',
          discountPercentage: '10',
          rating: '4.5',
          maxRating: '5'
        },            {
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
      ]
    }
  }
};

export default function getProducts(state = defaultState, action) {
  switch (action.type) {
    default:   return { ...state};
  }
}
