import cnBind from "classnames/bind";

import type { GetPaperDto } from "@/entities";

import styles from "./NavBarAssort.module.scss";

const cx = cnBind.bind(styles);

type NavBarAssortProps = {
    onChangeTab: (tab: { value: string; text: string }) => void;
    tab: string;
    tabsList: GetPaperDto[];
};
export const NavBarAssort = ({ onChangeTab, tab, tabsList }: NavBarAssortProps) => {
    return (
        <div className={cx("navbar-assort")}>
            <div className={cx("wrapper", "container")}>
                <h1>Ассортимент</h1>
                <div className={cx("tabs")}>
                    {tabsList.map((el) => (
                        <span
                            className={cx("tab", tab === el.name && "active")}
                            onClick={() => onChangeTab({ value: el.id, text: el.name })}
                            key={el.id}
                        >
                            {el.name}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};
