import { useState } from "react";
import cnBind from "classnames/bind";
import { InputNumber } from "primereact/inputnumber";

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
    const [value, setValue] = useState(50);

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
                        <TextField className={cx("item")} mode="light" placeholder="Ваше имя" />
                        <TextField className={cx("item")} mode="light" placeholder="+7 (___) ___ ____" />
                    </div>
                    <InputNumber
                        className={cx("item-number")}
                        value={value}
                        onValueChange={(e) => setValue(e.value as number)}
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
                        checked={false}
                        mode="light"
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
