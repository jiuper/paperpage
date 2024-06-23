import { useState } from "react";
import * as React from "react";
import axios from "axios";
import cnBind from "classnames/bind";
import { Dropdown } from "primereact/dropdown";

import type { Category } from "@/entities";
import { Button } from "@/shared/ui/Button";
import { TextField } from "@/shared/ui/TextField";

import styles from "../Admin.module.scss";
import { useRouter } from "next/router";

const cx = cnBind.bind(styles);

export const AdminCategory = ({ isEdit, category }: { isEdit: boolean; category: Category[] }) => {
    const router = useRouter()
    const [selectedId, setSelectedId] = useState<string>("");
    const [value, setValue] = useState<string>("");
    const onSubmit = () => {
        if (!isEdit) {
            void axios
                .post("https://papers-api-4meo.onrender.com/category", {
                    name: value,
                })
                .then((res) => (res.status === 201 ? alert("Категория добавлена") : alert("Категория уже существует")));
        } else {
            void axios
                .put(`https://papers-api-4meo.onrender.com/category`, {
                    name: value,
                    id: selectedId,
                })
                .then((res) => (res.status === 201 ? alert("Категория добавлена") : alert("Категория уже существует")));
        }
        router.reload()
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
                        onChange={(e) => handleChange(e.value)}
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
