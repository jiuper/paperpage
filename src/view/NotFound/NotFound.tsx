import cnBind from "classnames/bind";

import { Button } from "@/shared/ui/Button";

import styles from "./NotFound.module.scss";

const cx = cnBind.bind(styles);
export const NotFound = () => {
    return (
        <div className={cx("not-found")}>
            <span className={cx("title")}>УПС...</span>
            <h1>404</h1>
            <p>Неправильно набран адрес, или такой страницы больше не существует</p>
            <Button mode="green" label="На главную" />
        </div>
    );
};
