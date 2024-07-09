import cnBind from "classnames/bind";

import { FormMain } from "@/components/_Forms/FormMain";

import styles from "./FormCons.module.scss";

const cx = cnBind.bind(styles);
export const FormCons = () => {


    return (
        <div className={cx("form-cons", "container")}>
            <FormMain/>
        </div>
    );
};
