import React from "react";
import PropTypes from 'prop-types';

import "./categories.css";

export const Categories = React.memo(function Categories({activeCategory, items, onClickCategory}) {

    return (
        <div className="categories">
            <ul>
                {items && items.map((item, index) => 
                    <li 
                        className={activeCategory === index ? 'active' : ''}
                        onClick={() => onClickCategory(index)} 
                        key={`${item}_${index}`}>
                        {item}
                    </li>
                )}
            </ul>
        </div>
    );
});

Categories.propTypes = {
    activeCategory: PropTypes.number.isRequired,
    items: PropTypes.arrayOf(PropTypes.string).isRequired,
    onClickCategory: PropTypes.func.isRequired,
};
  
Categories.defaultProps = {
    items: [],
};
