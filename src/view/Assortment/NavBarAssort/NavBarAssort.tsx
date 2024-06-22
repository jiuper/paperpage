import cnBind from "classnames/bind";
import Link from "next/link";

import type { GetPaperDto } from "@/entities";

import styles from "./NavBarAssort.module.scss";

const cx = cnBind.bind(styles);

type NavBarAssortProps = {
    paperId: string;
    tabsList: GetPaperDto[];
};
export const NavBarAssort = ({ paperId, tabsList }: NavBarAssortProps) => {
    return (
        <div className={cx("navbar-assort")}>
            <div className={cx("wrapper", "container")}>
                <h1>Ассортимент</h1>
                <div className={cx("tabs")}>
                    {tabsList.map((el) => (
                        <Link
                            className={cx("tab", paperId === el.id && "active")}
                            href={`/assortment/${el.id}`}
                            key={el.id}
                        >
                            {el.name}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};
