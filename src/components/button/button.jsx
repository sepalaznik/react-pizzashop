import React from "react";
import classNames from "classnames";
import "./button.css";

export const Button = (props) => {
    return (
        <button
            onClick={props.onClick}
            className={classNames(props.className, {
                'button--outline': props.outline
            })}
        >
            {props.children}
        </button>
    )
};
