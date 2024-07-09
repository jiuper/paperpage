import { useState } from "react";
import cnBind from "classnames/bind";
import Link from "next/link";
import { Menubar } from "primereact/menubar";
import type { MenuItem } from "primereact/menuitem";
import { PanelMenu } from "primereact/panelmenu";
import { Sidebar } from "primereact/sidebar";

import { Logo } from "@/components/Logo";
import { Button } from "@/shared/ui/Button";

import styles from "./Header.module.scss";

const cx = cnBind.bind(styles);
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
                url: "/assortment/17826f6b-14de-4815-83d8-b092c7381946",
            },
            {
                label: "Ватман в листах",
                url: "/assortment/870cd1ef-b2c8-4329-8deb-5793b5499674",
            },
            {
                label: "Бумага-крафт",
                url: "/assortment/8fa5219a-4da3-4c9e-8060-64b67bc1c0fa",
            },
            {
                label: "Подпергамент",
                url: "/assortment/79ea5405-125a-4f7b-82a8-e1628870d920",
            },
            {
                label: "Для упаковки жировлагосодержа-щих продуктов",
                url: "/assortment/ad30ecbb-6916-45e7-92d8-f266133d9891",
            },
            {
                label: "Бумага мастштабно-координатная",
                url: "/assortment/de87b9b5-8fbb-4c33-8655-2e0d49292a5f",
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
export const Header = () => {
    const [visibleRight, setVisibleRight] = useState(false);

    return (
        <header className={cx("header")}>
            <div className={cx("wrapper")}>
                <Logo />
                <div className={cx("nav")}>
                    <Menubar model={items} className={cx("menu")} />
                    <Button
                        className={cx("sidebar-button")}
                        mode="white"
                        icon="pi pi-bars"
                        onClick={() => setVisibleRight(true)}
                    />
                    <Sidebar
                        className={cx("sidebar")}
                        position="right"
                        visible={visibleRight}
                        onHide={() => setVisibleRight(false)}
                    >
                        <PanelMenu model={items} className={cx("panel-menu")} />
                        <div className={cx("contacts")}>
                            <Link className={cx("email")} href="mailto:info@tpaper.ru" target="_blank">
                                info@tpaper.ru
                            </Link>
                            <Link className={cx("phone")} href="tel:+78122441037" target="_blank">
                                +7 (812) 244-10-37
                            </Link>
                        </div>
                    </Sidebar>
                </div>
                <div className={cx("contacts", "mobile")}>
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
