import cnBind from "classnames/bind";

import CARDS from "@/shared/assests/cards.png";
import { Button } from "@/shared/ui/Button";
import { CustomImage } from "@/shared/ui/CustomImage";

import styles from "./Navigation.module.scss";

const cx = cnBind.bind(styles);
export const Navigation = () => {
    return (
        <div className={cx("navigation")}>
            <div className={cx("wrapper", "container")}>
                <div className={cx("content")}>
                    <div className={cx("top")}>
                        <h2>Технические виды бумаг</h2>
                        <div className={cx("items")}>
                            <div className={cx("item")}>
                                <h3>Калька</h3>
                                <div className={cx("points")}>
                                    <div className={cx("point")}>
                                        <i className={cx("icon", "pi pi-check")} />
                                        <span>Калька бумажная 40 гр, 52 гр, 60 гр, 80 гр</span>
                                    </div>
                                    <div className={cx("point")}>
                                        <i className={cx("icon", "pi pi-check")} />
                                        <span>Калька бумажная 40 гр, 52 гр, 60 гр, 80 гр</span>
                                    </div>
                                    <div className={cx("point")}>
                                        <i className={cx("icon", "pi pi-check")} />
                                        <span>Калька бумажная 40 гр, 52 гр, 60 гр, 80 гр</span>
                                    </div>
                                </div>
                                <Button mode="green" label="Смотреть" />
                            </div>
                        </div>
                    </div>
                    <div className={cx("bottom")}>
                        <h2>Технические виды бумаг</h2>
                        <div className={cx("items")}>
                            <div className={cx("item")}>
                                <h3>Калька</h3>
                                <div className={cx("points")}>
                                    <div className={cx("point")}>
                                        <i className={cx("icon", "pi pi-check")} />
                                        <span>Калька бумажная 40 гр, 52 гр, 60 гр, 80 гр</span>
                                    </div>
                                    <div className={cx("point")}>
                                        <i className={cx("icon", "pi pi-check")} />
                                        <span>Калька бумажная 40 гр, 52 гр, 60 гр, 80 гр</span>
                                    </div>
                                    <div className={cx("point")}>
                                        <i className={cx("icon", "pi pi-check")} />
                                        <span>Калька бумажная 40 гр, 52 гр, 60 гр, 80 гр</span>
                                    </div>
                                </div>
                                <Button mode="green" label="Смотреть" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx("form")}>
                    <div className={cx("field")}>
                        <h3>Скачайте прайс - лист</h3>
                        <span>
                            Менеджеры компании с радостью ответят на ваши вопросы и произведут расчет стоимости заказа и
                            подготовят индивидуальное коммерческое предложение
                        </span>
                        <Button className={cx("button")} mode="white" label="Скачать прайс-лист (pdf)" />
                    </div>
                    <CustomImage src={CARDS} alt="forms" />
                </div>
            </div>
        </div>
    );
};
