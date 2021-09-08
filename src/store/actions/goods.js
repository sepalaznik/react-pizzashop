import axios from "axios";

export const setLoaded = (payload) => ({
    type: "SET_LOADED",
    payload,
});

export const fetchGoods = (category, sortBy) => (dispatch) => {
    dispatch(setLoaded(false));
    
    axios
        .get(`http://localhost:3002/goods?${category > 0 ? `category=${category}` : ''}&_sort=${sortBy.type}&_order=${sortBy.order}`)
        .then(({data}) => {
            dispatch(setGoods(data));
        }
    );
};
//      .get(`/goods?${category > 0 ? `category=${category}` : ''}&_sort=${sortBy.type}&_order=${sortBy.order}`)
//      doesn't work, because the server can not redirect trough the proxy to localhost:3001

export const setGoods = (items) => ({
    type: "SET_GOODS",
    payload: items,
});

