import cnBind from "classnames/bind";

import { Button } from "@/shared/ui/Button";
import { CheckBox } from "@/shared/ui/CheckBox";
import { TextField } from "@/shared/ui/TextField";

import styles from "./FormProduct.module.scss";

const cx = cnBind.bind(styles);
export const FormProduct = () => {
    return (
        <div className={cx("form-product")}>
            <div className={cx("field")}>
                <div className={cx("title")}>
                    <h2>Консультация по нашей продукции</h2>
                    <span>Заполните форму и мы свяжемся с вами</span>
                </div>

                <div className={cx("items")}>
                    <div className={cx("inputs")}>
                        <TextField mode="light" placeholder="Ваше имя" />
                        <TextField mode="light" placeholder="+7 (___) ___ ____" />
                        <Button className={cx("submit")} mode="white" label="Отправить" />
                    </div>

                    <CheckBox
                        classNameContainer={cx("item")}
                        checked={false}
                        mode="light"
                        title="Согласие на обработку персональных данных и данных об абонентах "
                    />
                </div>
            </div>
        </div>
    );
};
