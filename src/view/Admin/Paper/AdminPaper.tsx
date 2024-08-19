// @flow
import * as React from "react";
import { useState } from "react";
import axios from "axios";
import cnBind from "classnames/bind";
import { useRouter } from "next/router";
import { Dropdown } from "primereact/dropdown";

import type { Category, GetPaperDto } from "@/entities";
import { API_BASE } from "@/shared/constants/private";
import { Button } from "@/shared/ui/Button";
import { ImgPreview } from "@/shared/ui/ImgPreview/ImgPreview";
import { TextField } from "@/shared/ui/TextField";

import styles from "../Admin.module.scss";

const cx = cnBind.bind(styles);
type Props = {
    category: Category[];
    paper: GetPaperDto[];
    isEdit?: boolean;
};
export type CreatePaperDto = {
    name?: string;
    description?: string;
    applicationSphere?: string[];
    categoryId?: string;
};
export const AdminPaper = ({ category, paper, isEdit }: Props) => {
    const router = useRouter();
    const [selectedId, setSelectedId] = useState<string>("");
    const [data, setData] = useState<GetPaperDto[]>([]);
    const [value, setValue] = useState<{
        name: string;
        description: string;
        applicationSphere: string[];
        file: File | null;
    }>({
        name: "",
        description: "",
        file: null,
        applicationSphere: [],
    });
    const [share, setShare] = useState<string>("");
    const handleChange = (key: string, str: string) =>
        setValue({
            ...value,
            [key]: str,
        });

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setValue({
                ...value,
                file: e.target.files[0],
            });
        }
    };

    const handleChangeEdit = (str: string) => {
        const filterData = paper.filter((el) => el.id === str);
        setData(filterData);
        setSelectedId(str);
        setValue({
            ...value,
            name: filterData[0].name ?? "",
            description: filterData[0].description ?? "",
            applicationSphere: filterData[0].applicationSphere ?? [],
        });
    };

    const onSubmit = () => {
        if (!isEdit) {
            void axios
                .postForm<CreatePaperDto>(`${API_BASE}/paper/create`, {
                    ...value,
                    categoryId: selectedId,
                })
                .then((res) => (res.status === 201 ? alert("Категория добавлена") : alert("Категория уже существует")));
        } else {
            void axios
                .putForm<CreatePaperDto>(`${API_BASE}/paper/update`, {
                    ...value,
                    categoryId: selectedId,
                })
                .then((res) => (res.status === 201 ? alert("Категория обновлена") : alert("Категория уже существует")));
        }

        void router.reload();
        setValue({ file: null, name: "", description: "", applicationSphere: [] });
    };
    const handleAddShare = () => {
        if (share) {
            setValue({
                ...value,
                applicationSphere: [...value.applicationSphere, share],
            });
        }
        setShare("");
    };
    const handleDeleteShare = (str: string) => {
        setValue({
            ...value,
            applicationSphere: value.applicationSphere.filter((el) => el !== str),
        });
    };

    return (
        <div className={cx("add-paper")}>
            <span>{isEdit ? "Редактировать категорию" : "Добавить категорию"}</span>
            <div className={cx("form-paper")}>
                <Dropdown
                    value={selectedId}
                    onChange={(e) => {
                        isEdit ? handleChangeEdit(e.value as string) : setSelectedId(e.value as string);
                    }}
                    options={isEdit ? paper : category}
                    optionLabel="name"
                    optionValue="id"
                    placeholder={isEdit ? "Select a Paper" : "Select a Category"}
                    className={cx("dropdown")}
                />
                <TextField
                    mode="light"
                    placeholder="Название"
                    value={value.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                />
                <TextField
                    mode="light"
                    placeholder="Описание"
                    value={value.description}
                    onChange={(e) => handleChange("description", e.target.value)}
                />
                <div className={cx("share")}>
                    <TextField
                        mode="light"
                        placeholder="Сфера применения"
                        value={share}
                        onChange={(e) => setShare(e.target.value)}
                    />
                    <Button mode="green" label="Добавить в массив" onClick={handleAddShare} />
                    <div className={cx("share-info")}>
                        <span>В массиве: </span>
                        {value.applicationSphere.map((el) => (
                            <span onClick={() => handleDeleteShare(el)} className={cx("share-item")} key={el}>
                                {el}
                                <i
                                    className={cx("pi pi-times")}
                                    onClick={() =>
                                        setValue({
                                            ...value,
                                            applicationSphere: value.applicationSphere.filter((item) => item !== el),
                                        })
                                    }
                                />
                            </span>
                        ))}
                    </div>
                    <div className={cx("file")}>
                        <span>Загрузить картинку</span>
                        <input type="file" accept="image/*" onChange={(e) => handleFileChange(e)} />
                    </div>
                    {data.length !== 0 && (
                        <div className={cx("preview-container")}>
                            <ImgPreview className={cx("preview")} filesImg={data[0].picture} />
                        </div>
                    )}
                </div>
                <Button mode="green" label={isEdit ? "Редактировать" : "Добавить"} onClick={onSubmit} />
            </div>
        </div>
    );
};
