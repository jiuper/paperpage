import cnBind from "classnames/bind";
import { useFormik } from "formik";
import * as Yup from "yup";

import { Button } from "@/shared/ui/Button";
import { CheckBox } from "@/shared/ui/CheckBox";
import { Modal } from "@/shared/ui/Modal";
import { TextField } from "@/shared/ui/TextField";

import styles from "./ModalCallback.module.scss";

const cx = cnBind.bind(styles);
type ModalCallbackProps = {
    onClose: () => void;
    isOpen: boolean;
    title?: string;
};
export const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
export const ModalCallback = ({ onClose, isOpen, title = "Обратный звонок" }: ModalCallbackProps) => {
    const formik = useFormik({
        initialValues: {
            name: "",
            phone: "",
            isPolicy: false,
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
        <Modal maxWidth="421px" className={cx("modal")} isOpen={isOpen} hasHeader={title} onClose={onClose}>
            <div className={cx("wrapper")}>
                <div className={cx("title")}>
                    <span>Заполните форму и мы свяжемся с вами</span>
                </div>
                <div className={cx("form")}>
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
                        placeholder="+7 (___) ___ ____"
                        error={!!(formik.errors.phone && formik.touched.phone)}
                    />
                </div>
                <div className={cx("footer")}>
                    <CheckBox
                        classNameLabel={cx("label")}
                        checked={formik.values.isPolicy}
                        onChange={formik.handleChange}
                        name="isPolicy"
                        mode="light"
                        title="Согласие на обработку персональных данных и данных об абонентах "
                    />
                    <Button mode="green" label="Отправить" />
                </div>
            </div>
        </Modal>
    );
};
