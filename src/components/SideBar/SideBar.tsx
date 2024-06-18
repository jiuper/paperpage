import cnBind from "classnames/bind";
import Link from "next/link";

import { Logo } from "@/components/Logo";
import type { IRouting } from "@/shared/constants/Routing";

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
    return (
        <div className={cx("side-bar", classNames)}>
            <div className={cx("wrapper-side")}>
                <Logo hidden={hidden} />
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
