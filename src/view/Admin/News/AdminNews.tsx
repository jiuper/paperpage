import { useState } from "react";
import * as React from "react";
import axios from "axios";
import cnBind from "classnames/bind";
import { useRouter } from "next/router";
import { Dropdown } from "primereact/dropdown";

import type { GetNewsDto } from "@/entities";
import { Button } from "@/shared/ui/Button";
import { CustomImage } from "@/shared/ui/CustomImage";
import { TextField } from "@/shared/ui/TextField";

import styles from "../Admin.module.scss";
import { API_BASE } from "@/shared/constants/private";

const cx = cnBind.bind(styles);
type Props = {
    isEdit?: boolean;
    news: GetNewsDto[];
};
export const AdminNews = ({ news, isEdit }: Props) => {
    const router = useRouter();
    const [data, setData] = useState<GetNewsDto[]>([]);
    const [selectedId, setSelectedId] = useState<string>("");
    const [value, setValue] = useState<{
        title: string;
        description: string;
        file: File | null;
    }>({
        title: "",
        description: "",
        file: null,
    });
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
    const onSubmit = () => {
        if (!isEdit) {
            void axios
                .postForm(`${API_BASE}/news/create`, {
                    ...value,
                })
                .then((res) => (res.status === 201 ? alert("Новость добавлена") : alert("Новость уже существует")));
        } else {
            void axios
                .postForm(`${API_BASE}/news/update`, {
                    ...value,
                    id: selectedId,
                })
                .then((res) => (res.status === 201 ? alert("Новость добавлена") : alert("Новость уже существует")));
        }

        setValue({ title: "", description: "", file: null });
        void router.reload()
    };

    const handleChangeEdit = (str: string) => {
        const filterData = news.filter((el) => el.id === str);
        setData(filterData);
        setSelectedId(str);
        setValue({ title: filterData[0].title ?? "", description: filterData[0].description ?? "", file: null });
    };

    return (
        <div className={cx("add-news")}>
            <span>{isEdit ? "Редактировать новость" : "Добавить новость"}</span>
            <div className={cx("form-news")}>
                {isEdit && (
                    <Dropdown
                        value={selectedId}
                        onChange={(e) => handleChangeEdit(e.value as string)}
                        options={news}
                        optionLabel="title"
                        optionValue="id"
                        placeholder="Select a News"
                        className={cx("dropdown")}
                    />
                )}
                <TextField
                    mode="light"
                    placeholder="Название"
                    value={value.title}
                    name="title"
                    onChange={(e) => handleChange("title", e.target.value)}
                />
                <TextField
                    mode="light"
                    placeholder="Описание"
                    name="description"
                    value={value.description}
                    onChange={(e) => handleChange("description", e.target.value)}
                />
                <div className={cx("file")}>
                    <span>Загрузить картинку</span>
                    <input type="file" accept="image/*" onChange={(e) => handleFileChange(e)} />
                </div>
                {data.length !== 0 && (
                    <div className={cx("preview-container")}>
                        <CustomImage
                            width={400}
                            height={250}
                            className={cx("image")}
                            src={`${API_BASE}/picture/${data[0].pictureId ?? "0"}`}
                            alt="deletePhoto"
                        />
                    </div>
                )}
                <Button mode="green" label="Добавить" onClick={onSubmit} />
            </div>
        </div>
    );
};
