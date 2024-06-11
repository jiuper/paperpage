import cnBind from "classnames/bind";
import Link from "next/link";
import { useRouter } from "next/router";

import logo from "@/shared/assests/image 3.png";
import type { IRouting } from "@/shared/constants/Routing";
import { Routes } from "@/shared/constants/Routing";
import { CustomImage } from "@/shared/ui/CustomImage";

import styles from "./SideBar.module.scss";

const cx = cnBind.bind(styles);
export type TSideBar = {
    onMouseEnter: () => void;
    onMouseLeave: () => void;
    items: IRouting[];
    hidden?: boolean;
    classNames?: string;
};
export const SideBar = ({ onMouseLeave, onMouseEnter, items, hidden, classNames }: TSideBar) => {
    const router = useRouter();

    return (
        <div className={cx("side-bar", classNames)}>
            <div className={cx("wrapper-side")}>
                <div className={cx("side-bar__logo", { hidden })} onClick={() => router.push(Routes.HOME)}>
                    <CustomImage src={logo} alt="tpaper" className={cx("logo")} />
                    <div className={cx("side-bar__text")}>
                        <span className={cx("title")}>ТЕХНИЧЕСКАЯ БУМАГА</span>
                        <span className={cx("label")}>Работаем с 2013 года</span>
                    </div>
                </div>
                <div className={cx("side-bar__links")}>
                    {items.map((link) =>
                        link.mode ? (
                            <div
                                onMouseEnter={onMouseEnter}
                                onMouseLeave={onMouseLeave}
                                className={cx("side-bar__link", "context-link")}
                                key={link.name}
                            >
                                <span>{link.name}</span>
                                <i className={cx("pi pi-angle-right")} />
                            </div>
                        ) : (
                            <Link className={cx("side-bar__link")} key={link.name} href={link.path}>
                                {link.name}
                            </Link>
                        ),
                    )}
                </div>
                <div className={cx("side-bar__contacts", { hidden })}>
                    <a className={cx("email")} href="mailto:info@tpaper.ru" target="_blank">
                        info@tpaper.ru
                    </a>
                    <a className={cx("phone")} href="tel:+78122441037" target="_blank">
                        +7 (812) 244-10-37
                    </a>
                    <div className={cx("work-time")}>
                        <span className={cx("title")}>Работаем ПН-ПТ</span>
                        <span className={cx("label")}>с 9:00 до 18:00</span>
                    </div>
                </div>
            </div>
        </div>
    );
};
