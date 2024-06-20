import cnBind from "classnames/bind";

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
export const ModalCallback = ({ onClose, isOpen, title = "Обратный звонок" }: ModalCallbackProps) => {
    return (
        <Modal maxWidth="421px" className={cx("modal")} isOpen={isOpen} hasHeader={title} onClose={onClose}>
            <div className={cx("wrapper")}>
                <div className={cx("title")}>
                    <span>Заполните форму и мы свяжемся с вами</span>
                </div>
                <div className={cx("form")}>
                    <TextField mode="light" placeholder="Ваше имя" />
                    <TextField mode="light" placeholder="7 (___) ___-__-__" />
                </div>
                <div className={cx("footer")}>
                    <CheckBox
                        classNameLabel={cx("label")}
                        checked={false}
                        mode="light"
                        title="Согласие на обработку персональных данных и данных об абонентах "
                    />
                    <Button mode="green" label="Отправить" />
                </div>
            </div>
        </Modal>
    );
};
