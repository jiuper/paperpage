import cnBind from "classnames/bind";

import { Logo } from "@/components/Logo";

import styles from "./Header.module.scss";

const cx = cnBind.bind(styles);

export const Header = () => {
    return (
        <header className={cx("header")}>
            <div className={cx("wrapper")}>
                <Logo />
            </div>
        </header>
    );
};
