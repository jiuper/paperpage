import * as React from "react";
import cnBind from "classnames/bind";
import Link from "next/link";

import { ModalCallback } from "@/components/_Modals/ModalCallback";
import { Logo } from "@/components/Logo";
import { useBooleanState } from "@/shared/hooks";
import { Button } from "@/shared/ui/Button";

import styles from "./Footer.module.scss";

const cx = cnBind.bind(styles);
const navList = [
    { title: "Информация", href: "/" },
    { title: "Ассортимент", href: "#assortiment" },
    { title: "Услуги", href: "#service" },
    { title: "Контакты", href: "/cotacts" },
];
export const Footer = () => {
    const [isOpen, onOpen, onClose] = useBooleanState(false);

    return (
        <footer className={cx("footer")}>
            <div className={cx("wrapper", "container")}>
                <div className={cx("left")}>
                    <Logo />
                    <div className={cx("copyright")}>
                        <span>© 2014 ООО &quot;Техническая бумага-СПб&quot;</span>
                        <span>Все права защищены.</span>
                    </div>
                    <Button onClick={onOpen} mode="white" label="Написать руководителю" />
                </div>
                <div className={cx("right")}>
                    <div className={cx("nav")}>
                        {navList.map((item) => (
                            <Link key={item.title} href={item.href}>
                                {item.title}
                            </Link>
                        ))}
                    </div>
                    <div className={cx("contacts")}>
                        <div className={cx("phone")}>
                            <span>+7 (812) 244-10-37</span>
                            <p className={cx("work-time")}>
                                Работаем ПН-ПТ <span>с 9:00 до 18:00</span>
                            </p>
                        </div>
                        <div className={cx("email")}>info@tpaper.ru</div>
                        <p className={cx("address")}>
                            196644, г. Санкт-Петербург, пос. Сапёрный, территория предприятия &quot;Балтика&quot;, дом
                            без №, стр. литера К
                        </p>
                        <p className={cx("gps")}>GPS: N59°46.374 E30°42.993</p>
                        <span className={cx("gps")}>Разработка сайта - <strong className={cx("author")}>Левша</strong></span>
                    </div>

                </div>
            </div>
            <ModalCallback isOpen={isOpen} onClose={onClose} />
        </footer>
    );
};
