import cnBind from "classnames/bind";
import { useFormik } from "formik";
import * as Yup from "yup";

import { phoneRegExp } from "@/components/_Modals/ModalCallback";
import { Button } from "@/shared/ui/Button";
import { CheckBox } from "@/shared/ui/CheckBox";
import { TextField } from "@/shared/ui/TextField";

import styles from "./FormProduct.module.scss";
import { API_BASE } from "@/shared/constants/private";

const cx = cnBind.bind(styles);
export const FormProduct = () => {
    const formik = useFormik({
        initialValues: {
            name: "",
            phone: "",
            isPolicy: false,
        },
        onSubmit: async (values) => {
            await fetch(`${API_BASE}/mail`, {
                method: "post",
                body: JSON.stringify(values),
            }).then((res) => res.ok);
            formik.resetForm();
        },
        validationSchema: Yup.object({
            name: Yup.string().required(),
            phone: Yup.string().matches(phoneRegExp, "Неверный формат номера").required("Обязательное поле"),
        }),
    });

    return (
        <div className={cx("form-product")}>
            <div className={cx("field")}>
                <div className={cx("title")}>
                    <h2>Консультация по нашей продукции</h2>
                    <span>Заполните форму и мы свяжемся с вами</span>
                </div>

                <div className={cx("items")}>
                    <div className={cx("inputs")}>
                        <TextField
                            value={formik.values.name}
                            name="name"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            type="text"
                            placeholder="Ваше имя"
                            mode="light"
                            error={!!(formik.errors.name && formik.touched.name)}
                        />
                        <TextField
                            mode="light"
                            value={formik.values.phone}
                            name="phone"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            type="text"
                            placeholder="7 (___) ___ ____"
                            error={!!(formik.errors.phone && formik.touched.phone)}
                        />
                        <Button
                            type="submit"
                            disabled={!formik.values.isPolicy}
                            className={cx("submit")}
                            mode="white"
                            label="Отправить"
                        />
                    </div>

                    <CheckBox
                        classNameContainer={cx("item")}
                        checked={formik.values.isPolicy}
                        onChange={formik.handleChange}
                        name="isPolicy"
                        mode="light"
                        title="Согласие на обработку персональных данных и данных об абонентах "
                    />
                </div>
            </div>
        </div>
    );
};
