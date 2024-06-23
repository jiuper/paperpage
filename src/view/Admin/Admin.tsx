import { useState } from "react";
import cnBind from "classnames/bind";
import { Dropdown } from "primereact/dropdown";

import type { Category, GetCargoDto, GetNewsDto, GetPaperDto } from "@/entities";
import { AdminCargo } from "@/view/Admin/Cargo/AdminCargo";
import { AdminCategory } from "@/view/Admin/Category/AdminCategory";
import { AdminNews } from "@/view/Admin/News/AdminNews";
import { AdminPaper } from "@/view/Admin/Paper/AdminPaper";

import styles from "./Admin.module.scss";

const cx = cnBind.bind(styles);
type PropsType = {
    category: Category[];
    paper: GetPaperDto[];
    cargo: GetCargoDto[];
    news: GetNewsDto[];
};
export const Admin = ({ paper, category, news, cargo }: PropsType) => {
    const [selectedId, setSelectedId] = useState<string>("create");

    return (
        <div className={cx("admin")}>
            <div className={cx("wrapper", "container")}>
                <div className={cx("header")}>
                    <h1>Админ панель</h1>
                    <Dropdown
                        value={selectedId}
                        onChange={(e) => setSelectedId(e.value)}
                        options={[{ name: "create" }, { name: "edit" }]}
                        optionLabel="name"
                        optionValue="name"
                        placeholder="Select a Action"
                        className={cx("dropdown")}
                    />
                </div>

                <AdminCategory category={category} isEdit={selectedId === "edit"} />
                <AdminPaper category={category} isEdit={selectedId === "edit"} paper={paper} />
                <AdminCargo paper={paper} cargo={cargo} isEdit={selectedId === "edit"} />
                <AdminNews news={news} isEdit={selectedId === "edit"} />
            </div>
        </div>
    );
};
