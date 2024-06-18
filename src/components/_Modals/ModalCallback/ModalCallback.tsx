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
};
export const ModalCallback = ({ onClose, isOpen }: ModalCallbackProps) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <div className={cx("wrapper")}>
                <div className={cx("title")}>
                    <span>Обратный звонок</span>
                    <span>Заполните форму и мы свяжемся с вами</span>
                </div>
                <div className={cx("form")}>
                    <TextField />
                    <TextField />
                </div>
                <div className={cx("footer")}>
                    <CheckBox checked={false} title="Согласие на обработку персональных данных" />
                    <Button mode="green" label="Отправить" />
                </div>
            </div>
        </Modal>
    );
};
