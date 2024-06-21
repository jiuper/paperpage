import { useState } from "react";
import cnBind from "classnames/bind";
import Link from "next/link";
import { Menubar } from "primereact/menubar";
import { Sidebar } from "primereact/sidebar";

import { items } from "@/components/Header/constants";
import { Logo } from "@/components/Logo";
import { Button } from "@/shared/ui/Button";

import styles from "./Header.module.scss";

const cx = cnBind.bind(styles);

export const Header = () => {
    const [visibleRight, setVisibleRight] = useState(false);

    return (
        <header className={cx("header")}>
            <div className={cx("wrapper")}>
                <Logo />
                <div className={cx("nav")}>
                    <Menubar model={items} className={cx("menu")} />
                    <Button mode="green" icon="pi pi-arrow-left" onClick={() => setVisibleRight(true)} />
                    <Sidebar position="right" visible={visibleRight} onHide={() => setVisibleRight(false)}>
                        <Menubar model={items} className={cx("menu")} />
                    </Sidebar>
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
