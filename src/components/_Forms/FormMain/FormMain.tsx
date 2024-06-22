import cnBind from "classnames/bind";
import { useFormik } from "formik";
import Link from "next/link";
import { InputTextarea } from "primereact/inputtextarea";
import * as Yup from "yup";

import { Button } from "@/shared/ui/Button";
import { CheckBox } from "@/shared/ui/CheckBox";
import { TextField } from "@/shared/ui/TextField";

import styles from "./FormMain.module.scss";

const cx = cnBind.bind(styles);
const SignupSchema = Yup.object().shape({
    name: Yup.string().required("Required"),
    email: Yup.string().required("Required"),
});
export const FormMain = () => {
    const formik = useFormik({
        initialValues: {
            name: "",
            phone: "",
            email: "",
            question: "",
            isPolicy: false,
        },
        onSubmit: (values) => {
            console.log(values);
            formik.resetForm();
        },
        validationSchema: { SignupSchema },

        // const errors = { name: values.name, phone: values.phone, email: values.email };
        //
        // if (!values.name) {
        //     errors.name = "Required";
        // } else {
        //     errors.name = "";
        // }
        //
        // if (!values.phone) {
        //     errors.phone = "Required";
        // } else if (!/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/.test(values.phone)) {
        //     errors.phone = "Invalid phone";
        // } else {
        //     errors.phone = "";
        // }
        //
        // if (!values.email) {
        //     errors.email = "Required";
        // } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        //     errors.email = "Invalid email address";
        // } else {
        //     errors.email = "";
        // }
        //
        // return errors;
    });

    return (
        <div className={cx("form-main")}>
            <form onSubmit={formik.handleSubmit} className={cx("field")}>
                <h2 className={cx("title")}>Консультация по нашей продукции и услугам</h2>
                <div className={cx("field-base")}>
                    <div className={cx("inputs")}>
                        <div className={cx("field-item")}>
                            {formik.errors.name && formik.touched.name && <span>{formik.errors.name}</span>}
                            <TextField
                                value={formik.values.name}
                                name="name"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                type="text"
                                placeholder="Ваше имя"
                                error={!!(formik.errors.name && formik.touched.name)}
                            />
                        </div>
                        <div className={cx("field-item")}>
                            {formik.errors.phone && formik.touched.phone && <span>{formik.errors.phone}</span>}
                            <TextField
                                value={formik.values.phone}
                                name="phone"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                type="text"
                                placeholder="+7 (___) ___ ____"
                                error={!!(formik.errors.phone && formik.touched.phone)}
                            />
                        </div>
                        <div className={cx("field-item")}>
                            {formik.errors.email && formik.touched.email ? <span>{formik.errors.email}</span> : null}
                            <TextField
                                value={formik.values.email}
                                name="email"
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                type="text"
                                placeholder="Ваш email"
                                error={!!(formik.errors.email && formik.touched.email)}
                            />
                        </div>
                    </div>

                    <InputTextarea
                        value={formik.values.question}
                        name="question"
                        onChange={formik.handleChange}
                        autoResize
                        className={cx("textarea")}
                        placeholder="Ваш вопрос"
                    />
                </div>
                <div className={cx("buttons")}>
                    <CheckBox
                        checked={formik.values.isPolicy}
                        onChange={formik.handleChange}
                        name="isPolicy"
                        title="Согласие на обработку персональных данных и данных об абонентах"
                    />
                    <Button type="submit" mode="green" label="Отправить" />
                </div>
                <div className={cx("info")}>
                    <div className={cx("text")}>
                        Так же, вы можете позвоните по номеру телефона
                        <div className={cx("phone-wrapper")}>
                            <svg
                                width="19"
                                height="19"
                                viewBox="0 0 19 19"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M5.77322 6.59369C6.44657 7.99614 7.36448 9.31057 8.52695 10.473C9.68943 11.6355 11.0039 12.5534 12.4063 13.2268C12.5269 13.2847 12.5873 13.3137 12.6636 13.3359C12.9348 13.415 13.2679 13.3582 13.4976 13.1937C13.5622 13.1474 13.6175 13.0921 13.7281 12.9815C14.0663 12.6433 14.2354 12.4742 14.4055 12.3636C15.0468 11.9467 15.8736 11.9467 16.5149 12.3636C16.685 12.4742 16.8541 12.6433 17.1923 12.9815L17.3808 13.1701C17.895 13.6842 18.1521 13.9413 18.2917 14.2174C18.5694 14.7665 18.5694 15.4149 18.2917 15.964C18.1521 16.2401 17.895 16.4972 17.3808 17.0113L17.2283 17.1638C16.7159 17.6762 16.4597 17.9324 16.1114 18.1281C15.7249 18.3452 15.1246 18.5013 14.6813 18.5C14.2818 18.4988 14.0088 18.4213 13.4627 18.2663C10.528 17.4334 7.75879 15.8617 5.44852 13.5515C3.13825 11.2412 1.56664 8.47199 0.733688 5.53731C0.578694 4.99123 0.501196 4.71819 0.500008 4.31868C0.498689 3.87537 0.6548 3.27507 0.871917 2.88857C1.06758 2.54025 1.32378 2.28406 1.83617 1.77167L1.98867 1.61917C2.50282 1.10502 2.75989 0.847944 3.03599 0.708296C3.58508 0.430568 4.23353 0.430568 4.78262 0.708296C5.05872 0.847943 5.31579 1.10502 5.82994 1.61917L6.01847 1.80769C6.3567 2.14592 6.52581 2.31504 6.63638 2.4851C7.05335 3.12641 7.05335 3.95319 6.63638 4.5945C6.52581 4.76456 6.3567 4.93368 6.01847 5.27191C5.90788 5.3825 5.85258 5.43779 5.8063 5.50243C5.64182 5.73214 5.58503 6.06519 5.66409 6.33642C5.68634 6.41275 5.7153 6.47306 5.77322 6.59369Z"
                                    fill="#63A38B"
                                />
                            </svg>
                            <Link className={cx("link")} href="tel:+78122441038">
                                7 (812) 244 10 38
                            </Link>
                        </div>
                    </div>
                    <div className={cx("text")}>
                        либо, оправить заявку на нашу электронную почту
                        <div className={cx("email-wrapper")}>
                            <svg
                                width="21"
                                height="16"
                                viewBox="0 0 21 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M1.67157 1.17157C0.5 2.34315 0.5 4.22876 0.5 8C0.5 11.7712 0.5 13.6569 1.67157 14.8284C2.84315 16 4.72876 16 8.5 16H12.5C16.2712 16 18.1569 16 19.3284 14.8284C20.5 13.6569 20.5 11.7712 20.5 8C20.5 4.22876 20.5 2.34315 19.3284 1.17157C18.1569 0 16.2712 0 12.5 0H8.5C4.72876 0 2.84315 0 1.67157 1.17157ZM17.0762 3.51986C17.3413 3.83807 17.2983 4.31099 16.9801 4.57617L14.7837 6.40657C13.8973 7.14523 13.1789 7.74392 12.5448 8.15172C11.8843 8.57653 11.2411 8.84488 10.5 8.84488C9.75892 8.84488 9.11567 8.57653 8.45518 8.15172C7.82112 7.74392 7.10271 7.14523 6.21636 6.40658L4.01986 4.57617C3.70165 4.31099 3.65866 3.83807 3.92383 3.51986C4.18901 3.20165 4.66193 3.15866 4.98014 3.42383L7.13903 5.22291C8.07199 6.00038 8.71973 6.53841 9.26658 6.89013C9.79594 7.23059 10.1549 7.34487 10.5 7.34487C10.8451 7.34487 11.2041 7.23059 11.7334 6.89013C12.2803 6.53841 12.928 6.00038 13.861 5.22291L16.0199 3.42383C16.3381 3.15866 16.811 3.20165 17.0762 3.51986Z"
                                    fill="#63A38B"
                                />
                            </svg>

                            <Link className={cx("link")} href="mailto:info@tpaper.ru">
                                info@tpaper.ru
                            </Link>
                        </div>
                    </div>
                    <p className={cx("work-time")}>
                        Работаем ПН-ПТ <span className={cx("bold")}>с 9:00 до 18:00</span>
                    </p>
                </div>
            </form>
        </div>
    );
};
