import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { Categories } from "../components/categories/categories.jsx";
import { SortPopup } from "../components/categories/sort-popup.jsx";
import { GoodsBox } from "../components/goods-box/goods-box.jsx";
import { PreloadingBox } from "../components/goods-box/preloading-box.jsx";
import { setCategory, setSortBy } from "../store/actions/filters.js";
import { fetchGoods } from "../store/actions/goods.js";
import { addGoodsToCart } from "../store/actions/cart.js";

const categoriesNames = ['Все', 'Традиционные', 'Вегетарианские', 'Острые', 'Рыбные'];
const sortItems = [
    {name: 'популярности', type: 'rating', order: "desc"},
    {name: 'цене', type: 'price', order: "desc"},
    {name: 'алфавиту', type: 'name', order: "asc"}
];

export function Home() {
    const dispatch = useDispatch();
    const items = useSelector((state) => state.goods.items);
    const cartItems = useSelector(({cart}) => cart.items);
    const isLoaded = useSelector((state) => state.goods.isLoaded);
    const { category, sortBy } = useSelector(({filters}) => filters);
    
    React.useEffect(() => {
        dispatch(fetchGoods(category, sortBy))
    }, [category, sortBy]);

    const onSelectCategory = React.useCallback((index) => {
        dispatch(setCategory(index));
    }, []);

    const onSelectSortType = React.useCallback((type) => {
        dispatch(setSortBy(type));
    }, []);

    const handleAddGoodsToCart = obj => {
        dispatch(addGoodsToCart(obj));
    };

    return (
        <div className="container">
            <div className="content__top">
                <Categories 
                    activeCategory={category} 
                    items={categoriesNames} 
                    onClickCategory={onSelectCategory} 
                />
                <SortPopup 
                    activeSortType={sortBy.type}
                    items={sortItems} 
                    onClickSortType={onSelectSortType} />
            </div>
            <h2 className="content__title">{categoriesNames[category]} пиццы</h2>
            <div className="content__items">
                {isLoaded 
                    ? items.map((obj) => 
                        <GoodsBox 
                            onClickAddGoods={handleAddGoodsToCart} 
                            key={obj.id} 
                            numberInCount={cartItems[obj.id] && cartItems[obj.id].items.length}
                            {...obj} />)
                    : Array(8).fill(0).map((_, index) => <PreloadingBox key={index} />)
                }
            </div>
        </div>
    )
};
