import React, {useState} from "react";


export default function Toggle(props) {
    const [toggle, setToggle] = useState(false);

    function handleToggle() {
        // if (!props.onClick) return;
        setToggle(!toggle);
        props.onClick();
    }

    function handleLabelClick(label) {
        // if (!props.onClick) return;

        if (label === "lead") {
            if (props.rearLabel) {
                setToggle(false);
                props.onClick()
            } else {
                setToggle(!toggle);
                props.onClick();
            }
        } else if (label === "rear") {
            if (props.leadLabel) {
                setToggle(true);
                props.onClick()
            } else {
                setToggle(!toggle);
                props.onClick();
            }
        }
    }

    function renderButton() {
        return (
            <button className={!(props.leadLabel || props.rearLabel) && props.utils ? `[ toggle ] [ ${props.utils} ]` : 'toggle'}
                    onClick={handleToggle}
                    aria-pressed={toggle}
                    {...props.attributes}
            >
                <span className="toggle__handle" aria-hidden="true"></span>
            </button>
        );
    }

    return (
        props.leadLabel || props.rearLabel ?
            <div className={props.utils ? `[ toggle-container ] [ ${props.utils} ]` : 'toggle-container'}>
                {props.leadLabel && <p onClick={() => handleLabelClick("lead")} data-active={!toggle}>{props.leadLabel}</p>}
                {renderButton()}
                {props.rearLabel && <p onClick={() => handleLabelClick("rear")} data-active={toggle}>{props.rearLabel}</p>}
            </div> :
            renderButton()
    );
}