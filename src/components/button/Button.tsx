import "./_style.scss";
import {ButtonProps} from "./Button.types";
import classNames from "../../utility/classnames";

const Button: React.FC<ButtonProps> = ({appearance = "default",
                                           intents,
                                           size,
                                           disabled = false,
                                           children,
                                           className,
                                           ...restProps}) => {
    const classes = classNames("button", className, {
        [`button-${appearance}`]: appearance,
        [`button-${size}`]: size,
        'disabled': disabled,
    });
    return (
        <button className={classes} disabled={disabled} {...restProps}>
            {children}
        </button>
    );
};


export default Button;