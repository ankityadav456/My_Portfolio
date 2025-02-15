import PropTypes from "prop-types";

const ButtonPrimary = ({
    herf,
    target='_self',
    label,
    icon,
    classes
}) => {
    if (herf) {
        return (
            <a
            herf={herf}
            traget={traget}
            className={"btn btn-primary " + classes}
            >
                {label}

                {icon ?
                <span className="material-symbols-rounded" aria-hidden="true">
                    {icon}
                </span>
                : undefined
                }
    
    
            </a>
        )
    } else {
        return (
            <button className={"btn btn-primary " + classes}>
                {label}

                
            </button>

        )
    }
}

ButtonPrimary.propType = {
    label: PropTypes.string.isRequired,
    herf: PropTypes.string,
    traget: PropTypes.string,
    icon: PropTypes.string,
    classes: PropTypes.string
}


/**
 * Outline Button
 */

const ButtonOutline = ({
    herf,
    target='_self',
    label,
    icon,
    classes
}) => {
    if (herf) {
        return (
            <a
            herf={herf}
            traget={traget}
            className={"btn btn-outline " + classes}
            >
                {label}

                {icon ?
                <span className="material-symbols-rounded" aria-hidden="true">
                    {icon}
                </span>
                : undefined
                }
    
    
            </a>
        )
    } else {
        return (
            <button className={"btn btn-outline " + classes}>
                {label}

                
            </button>

        )
    }
}

ButtonOutline.propType = {
    label: PropTypes.string.isRequired,
    herf: PropTypes.string,
    traget: PropTypes.string,
    icon: PropTypes.string,
    classes: PropTypes.string
}
export {
    ButtonPrimary,
    ButtonOutline
}