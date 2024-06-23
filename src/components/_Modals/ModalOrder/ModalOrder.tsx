import cnBind from "classnames/bind";
import { useFormik } from "formik";
import { InputNumber } from "primereact/inputnumber";
import * as Yup from "yup";

import { phoneRegExp } from "@/components/_Modals/ModalCallback";
import { Button } from "@/shared/ui/Button";
import { CheckBox } from "@/shared/ui/CheckBox";
import { Modal } from "@/shared/ui/Modal";
import { TextField } from "@/shared/ui/TextField";

import styles from "./ModalOrder.module.scss";

const cx = cnBind.bind(styles);
type ModalOrderProps = {
    onClose: () => void;
    isOpen: boolean;
    title?: string;
};
export const ModalOrder = ({ isOpen, onClose, title }: ModalOrderProps) => {
    const formik = useFormik({
        initialValues: {
            name: "",
            phone: "",
            isPolicy: false,
            current: 1,
        },
        onSubmit: (values) => {
            console.log(values);
            formik.resetForm();
        },
        validationSchema: Yup.object({
            name: Yup.string().required(),
            phone: Yup.string().matches(phoneRegExp, "Неверный формат номера").required("Обязательное поле"),
        }),
    });

    return (
        <Modal
            className={cx("modal-order")}
            maxWidth="732px"
            hasHeader="Быстрый заказ"
            isOpen={isOpen}
            onClose={onClose}
        >
            <div className={cx("wrapper")}>
                <div className={cx("title")}>
                    <span>{title}</span>
                </div>
                <div className={cx("fields")}>
                    <div className={cx("inputs")}>
                        <TextField
                            value={formik.values.name}
                            name="name"
                            onChange={formik.handleChange}
                            className={cx("item")}
                            onBlur={formik.handleBlur}
                            type="text"
                            placeholder="Ваше имя"
                            mode="light"
                            error={!!(formik.errors.name && formik.touched.name)}
                        />
                        <TextField
                            mode="light"
                            value={formik.values.phone}
                            className={cx("item")}
                            name="phone"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            type="text"
                            placeholder="+7 (___) ___ ____"
                            error={!!(formik.errors.phone && formik.touched.phone)}
                        />
                    </div>
                    <InputNumber
                        className={cx("item-number")}
                        value={formik.values.current}
                        onValueChange={(e) => formik.setFieldValue("current", e.value as number)}
                        buttonLayout="horizontal"
                        showButtons
                        decrementButtonClassName={cx("p-button-secondary")}
                        incrementButtonClassName={cx("p-button-secondary")}
                        incrementButtonIcon={cx("pi pi-plus")}
                        decrementButtonIcon={cx("pi pi-minus")}
                    />
                </div>
                <div className={cx("footer")}>
                    <CheckBox
                        mode="light"
                        checked={formik.values.isPolicy}
                        onChange={formik.handleChange}
                        name="isPolicy"
                        classNameContainer={cx("policy")}
                        classNameLabel={cx("title")}
                        title="Согласие на обработку персональных данных и данных об абонентах "
                    />
                    <Button className={cx("submit")} mode="green" label="Отправить" />
                </div>
            </div>
        </Modal>
    );
};
