export function getPriceInfo(obj) {
  let size = 0, key, price = 0;
  for (key in obj) {
      if (obj.hasOwnProperty(key)) {
        size++;
        price += +obj[key].currentPrice * obj[key].quantity;
      }
  }
  return [size, price];
};