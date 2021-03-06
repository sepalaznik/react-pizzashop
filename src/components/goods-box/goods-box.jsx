import React from "react";
import classNames from "classnames";
import PropTypes from 'prop-types';
import ReactTooltip from 'react-tooltip';

import "./goods-box.css";
import { Button } from "../button/button.jsx"

export const GoodsBox = ({ id, imageUrl, text, name, types, sizes, price, numberInCount, onClickAddGoods }) => {
    const availableTypes = [ "тонкое", "традиционное" ];
    const availableSizes = [ 24, 32, 40 ];

    const [activeType, setActiveType] = React.useState(types[0]);
    const [selectSize, setSelectSize] = React.useState(0);

    const onSelectType = (index) => {
        setActiveType(index);
    };

    const onSelectSize = (index) => {
        setSelectSize(index);
    };

    const onHandleAddGoods = () => {
        const obj = {
            id,
            imageUrl,
            name,
            size: availableSizes[selectSize],
            type: availableTypes[activeType],
            price,
        };
        onClickAddGoods(obj);
    };

    return (
        <div className="goods-box">
            <div data-tip={text}>
                <img
                    className="goods-box__image"
                    src={imageUrl}
                    alt="Our Goods" />
                <ReactTooltip 
                    backgroundColor="rgb(255, 241, 205)" 
                    delayShow={400}
                    border 
                    borderColor="rgb(40, 40, 40)" 
                    textColor="rgb(0, 0, 0)" 
                    multiline />
            </div> 
            <h4 className="goods-box__title">{name}</h4>
            <div className="goods-box__selector">
                <ul>
                    {availableTypes.map((type, index) => (
                        <li 
                            key={type}
                            onClick={() => onSelectType(index)}
                            className={classNames({
                                active: activeType === index,
                                disable: !types.includes(index),
                            })}>
                            {type}
                        </li>
                    ))}
                </ul>
                <ul>
                    {availableSizes.map((size, index) => (
                        <li 
                            key={size}
                            onClick={() => onSelectSize(index)}
                            className={classNames({
                                active: selectSize === index,
                                disable: !sizes.includes(size),
                            })}>
                            {size} см.
                        </li>
                    ))}
                </ul>
            </div>
            <div className="goods-box__bottom">
                <div className="goods-box__price">от {price} &euro;</div>
                <Button onClick={onHandleAddGoods} className="button--add" outline>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                            fill="white" />
                    </svg>
                    <span>Добавить</span>
                    {numberInCount && <i>{numberInCount}</i>}
                </Button>
            </div>
        </div>
    )
}

GoodsBox.propTypes = {
    name: PropTypes.string,
    imageUrl: PropTypes.string,
    price: PropTypes.number,
    types: PropTypes.arrayOf(PropTypes.number),
    sizes: PropTypes.arrayOf(PropTypes.number),
    onClickAddGoods: PropTypes.func,
    numberInCount: PropTypes.number,
};
  
GoodsBox.defaultProps = {
    types: [],
    sizes: [],
};
