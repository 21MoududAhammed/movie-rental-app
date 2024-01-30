export default function cartReducer(cartData, action) {
  switch (action.type) {
    case "added": {
      return [...cartData, action.item];
    }
    case "deleted": {
      return cartData.filter((item) => item.id !== action.itemId);
    }
    default: {
      throw Error("unknown type ");
    }
  }
}
