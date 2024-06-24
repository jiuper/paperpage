import cnBind from "classnames/bind";
import { useRouter } from "next/router";

import { Button } from "@/shared/ui/Button";

import styles from "./NotFound.module.scss";

const cx = cnBind.bind(styles);
export const NotFound = () => {
    const router = useRouter();

    return (
        <div className={cx("not-found")}>
            <span className={cx("title")}>УПС...</span>
            <h1>404</h1>
            <p>Неправильно набран адрес, или такой страницы больше не существует</p>
            <Button onClick={() => router.push("/")} mode="green" label="На главную" />
        </div>
    );
};
