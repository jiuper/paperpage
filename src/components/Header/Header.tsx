import cnBind from "classnames/bind";
import Link from "next/link";
import { Menubar } from "primereact/menubar";
import type { MenuItem } from "primereact/menuitem";

import { Logo } from "@/components/Logo";

import styles from "./Header.module.scss";

const cx = cnBind.bind(styles);
type HeaderProps = {
    hidden?: boolean;
    classNames?: string;
};
export const Header = ({ hidden, classNames }: HeaderProps) => {
    const items: MenuItem[] = [
        {
            label: "Информация",
            url: "/",
        },

        {
            label: "Ассортимент",
            items: [
                {
                    label: "Калька",
                },
                {
                    label: "Ватман в листах",
                },
                {
                    label: "Бумага-крафт",
                },
                {
                    label: "Подпергамент",
                },
                {
                    label: "Для упаковки жировлагосодержа-щих продуктов",
                },
            ],
        },
        {
            label: "Услуги",

            items: [
                {
                    label: "Технические виды услуг",
                    url: "/services/1",
                },
                {
                    label: "Полиграфические услуги",
                    url: "/services/2",
                },
                {
                    label: "Типографские услуги",
                    url: "/services/3",
                },
            ],
        },
        {
            label: "Контакты",
            url: "/contacts",
        },
    ];

    return (
        <header className={cx("header")}>
            <div className={cx("wrapper")}>
                <Logo classNameLabel={cx("logo-label")} />
                <div className={cx("nav")}>
                    <Menubar model={items} className={cx("menu")} />
                </div>
                <div className={cx("contacts")}>
                    <Link className={cx("email")} href="mailto:info@tpaper.ru" target="_blank">
                        info@tpaper.ru
                    </Link>
                    <Link className={cx("phone")} href="tel:+78122441037" target="_blank">
                        +7 (812) 244-10-37
                    </Link>
                </div>
            </div>
        </header>
    );
};
