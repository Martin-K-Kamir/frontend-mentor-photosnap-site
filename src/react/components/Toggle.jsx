import Button from "./Button";
import React from "react";


export default function Toggle(props) {

    function getTag() {
        if (props.leadContent || props.rearContent) {
            return 'div';
        } else {
            return React.Fragment;
        }
    }
    const Tag = getTag();

    function handleClick() {
        if (!props.onClick) return

        props.onClick();
    }

    return (
        <Tag>
            {props.leadContent && <p>{props.leadContent}</p>}
            <button className={props.utils ? `[ toggle ] [ ${props.utils} ]` : 'toggle'}
                    onClick={handleClick}
                    {...props.attributes}
            >
                <span className="toggle__handle" aria-hidden="true"></span>
            </button>
            {props.rearContent && <p>{props.rearContent}</p>}
        </Tag>
    );
}