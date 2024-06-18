import cnBind from "classnames/bind";

import { Button } from "@/shared/ui/Button";

import styles from "./NotFound.module.scss";

const cx = cnBind.bind(styles);
export const NotFound = () => {
    return (
        <div className={cx("not-found")}>
            <Button mode="green" label="На главную" />
        </div>
    );
};
