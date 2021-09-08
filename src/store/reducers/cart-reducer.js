const initialState = {
    items: {},
    totalPrice: 0,
    itemCount: 0,
}

const getPriceSum = array => Number(array.reduce((sum, obj) => obj.price + sum, 0).toFixed(2));

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_GOODS_TO_CART": {
            const currentGoodsPosition = !state.items[action.payload.id] 
                ? [action.payload]
                : [...state.items[action.payload.id].items, action.payload]
            const goodsInCart = {
                ...state.items,
                [action.payload.id]: {
                    items: currentGoodsPosition,
                    totalPriceInItem: getPriceSum(currentGoodsPosition),
                },
            };
            const newItems = Object.values(goodsInCart).map(obj => obj.items);
            const allGoodsInCart = [].concat.apply([], newItems);
            const totalPrice = getPriceSum(allGoodsInCart);
            return {
                ...state,
                items: goodsInCart,
                itemCount: allGoodsInCart.length,
                totalPrice,
            };
        };

        case "REMOVE_CART_ITEM": {
            const itemsRemoved = {
                ...state.items
            };
            const currentPriceInItem = itemsRemoved[action.payload].totalPriceInItem;
            const currentItemCount = itemsRemoved[action.payload].items.length;
            delete itemsRemoved[action.payload];
            return {
                ...state,
                items: itemsRemoved,
                totalPrice: Number((state.totalPrice - currentPriceInItem).toFixed(2)),
                itemCount: state.itemCount - currentItemCount,
            };
        };

        case 'CART_ITEM_PLUS': {
            const setItemPlus = [
                ...state.items[action.payload].items,
                state.items[action.payload].items[0],
            ];
            const addedItems = {
                ...state.items,
                [action.payload]: {
                    items: setItemPlus,
                    totalPriceInItem: getPriceSum(setItemPlus),
                },
            };
            const addedPrice = state.items[action.payload].items[0].price;
            const itemCount = setItemPlus.length;
            return {
                ...state,
                items: addedItems,
                itemCount,
                totalPrice: Number((state.totalPrice + addedPrice).toFixed(2)),
             };
        };

        case 'CART_ITEM_MINUS': {
            const oldItems = state.items[action.payload].items;
            const setItemMinus = oldItems.length > 1 ? state.items[action.payload].items.slice(1) : '';
            const diminishedItems = {
                ...state.items,
                [action.payload]: {
                    items: setItemMinus,
                    totalPriceInItem: getPriceSum(setItemMinus),
                },
            };
            const diminishedPrice = state.items[action.payload].items[0].price;
            const itemCount = setItemMinus.length;
            return {
                ...state,
                items: diminishedItems,
                itemCount,
                totalPrice: Number((state.totalPrice - diminishedPrice).toFixed(2)),
            };
        };

        case "CLEAR_CART":
            return {
                ...state,
                items: {},
                totalPrice: 0,
                itemCount: 0,
            };

        default:
            return state;
    }
};

export default cartReducer;
