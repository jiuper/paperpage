import cnBind from "classnames/bind";
import type { ButtonProps } from "primereact/button";
import { Button as PrimereactButton } from "primereact/button";

import styles from "./Button.module.scss";

const cx = cnBind.bind(styles);
type ButtonPropsC = ButtonProps & {
    mode: "green" | "white" | "white-green";
    className?: string;
};
export const Button = ({ mode, className, ...props }: ButtonPropsC) => {
    return <PrimereactButton className={cx("button", className, mode)} {...props} />;
};
