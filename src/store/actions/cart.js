export const addGoodsToCart = (obj) => ({
    type: "ADD_GOODS_TO_CART",
    payload: obj,
});

export const clearCart = () => ({
    type: "CLEAR_CART",
});

export const removeCartItem = (id) => ({
    type: "REMOVE_CART_ITEM",
    payload: id,
});

export const cartItemPlus = (id) => ({
    type: "CART_ITEM_PLUS",
    payload: id,
});
  
export const cartItemMinus = (id) => ({
    type: "CART_ITEM_MINUS",
    payload: id,
});
