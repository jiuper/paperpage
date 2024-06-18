import cnBind from "classnames/bind";
import Link from "next/link";
import { Menubar } from "primereact/menubar";

import { Logo } from "@/components/Logo";

import styles from "./Header.module.scss";

const cx = cnBind.bind(styles);
type HeaderProps = {
    hidden?: boolean;
    classNames?: string;
};
export const Header = ({ hidden, classNames }: HeaderProps) => {
    const items = [
        {
            label: "Информация",
        },
        {
            label: "Преимущества",
        },
        {
            label: "Люди",
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
                },
                {
                    label: "Полиграфические услуги",
                },
                {
                    label: "Типографские услуги",
                },
            ],
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
