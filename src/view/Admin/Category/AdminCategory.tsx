import { useState } from "react";
import * as React from "react";
import axios from "axios";
import cnBind from "classnames/bind";
import { useRouter } from "next/router";
import { Dropdown } from "primereact/dropdown";

import type { Category } from "@/entities";
import { Button } from "@/shared/ui/Button";
import { TextField } from "@/shared/ui/TextField";

import styles from "../Admin.module.scss";
import { API_BASE } from "@/shared/constants/private";

const cx = cnBind.bind(styles);

export const AdminCategory = ({ isEdit, category }: { isEdit: boolean; category: Category[] }) => {
    const router = useRouter();
    const [selectedId, setSelectedId] = useState<string>("");
    const [value, setValue] = useState<string>("");
    const onSubmit = () => {
        if (!isEdit) {
            void axios
                .post(`${API_BASE}/category`, {
                    name: value,
                })
                .then((res) => (res.status === 201 ? alert("Категория добавлена") : alert("Категория уже существует")));
        } else {
            void axios
                .put(`${API_BASE}/category`, {
                    name: value,
                    id: selectedId,
                })
                .then((res) => (res.status === 201 ? alert("Категория добавлена") : alert("Категория уже существует")));
        }
        void router.reload();
        setValue("");
    };
    const handleChange = (str: string) => {
        setSelectedId(str);
        setValue(category.find((el) => el.id === str)?.name || "");
    };

    return (
        <div className={cx("add-category")}>
            <span>{isEdit ? "Редактировать раздел" : "Добавить раздел"}</span>
            <div className={cx("form-category")}>
                {isEdit && (
                    <Dropdown
                        value={selectedId}
                        onChange={(e) => handleChange(e.value as string)}
                        options={category}
                        optionLabel="name"
                        optionValue="id"
                        placeholder="Select a Category"
                        className={cx("dropdown")}
                    />
                )}
                <TextField
                    mode="light"
                    placeholder="Название"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
                <Button mode="green" label={isEdit ? "Редактировать" : "Добавить"} onClick={onSubmit} />
            </div>
        </div>
    );
};
