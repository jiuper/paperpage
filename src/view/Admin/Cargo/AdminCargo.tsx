import * as React from "react";
import { useState } from "react";
import axios from "axios";
import cnBind from "classnames/bind";
import { useRouter } from "next/router";
import { Dropdown } from "primereact/dropdown";

import type { GetCargoDto, GetPaperDto } from "@/entities";
import { API_BASE } from "@/shared/constants/private";
import { Button } from "@/shared/ui/Button";
import { CustomImage } from "@/shared/ui/CustomImage";
import { TextField } from "@/shared/ui/TextField";
import { inputs } from "@/view/Admin/Cargo/inputs";
import type { CreatePaperDto } from "@/view/Admin/Paper/AdminPaper";

import styles from "../Admin.module.scss";

const cx = cnBind.bind(styles);
type Props = { paper: GetPaperDto[]; cargo: GetCargoDto[]; isEdit?: boolean };
export const AdminCargo = ({ paper, cargo, isEdit }: Props) => {
    const router = useRouter();
    const [data, setData] = useState<GetCargoDto[]>([]);
    const [selectedId, setSelectedId] = useState<string>("");
    const [value, setValue] = useState<{ [key: string]: string }>({
        title: "",
        description: "",
        weight: "",
        shortDescription: "",
        articleNumber: "",
        packageQuantity: "",
        price: "",
        width: "",
        density: "",
        winding: "",
        packagingType: "",
    });
    const [files, setFiles] = useState<File[]>([]);

    const handleChange = (key: string, str: string) =>
        setValue({
            ...value,
            [key]: str,
        });

    const onSubmit = () => {
        if (!isEdit) {
            void axios
                .postForm<CreatePaperDto>(
                    `${API_BASE}/cargo/create`,
                    {
                        ...value,
                        paperId: selectedId,
                        files,
                    },
                    {
                        headers: {
                            "Content-Type": "multipart/form-data",
                        },
                    },
                )
                .then((res) => (res.status === 201 ? alert("Продукт добавлена") : alert("Продукт уже существует")));
        } else {
            void axios
                .postForm(
                    `${API_BASE}/cargo/update`,
                    {
                        ...value,
                        id: selectedId,
                        ...(files !== null ? files : {}),
                    },
                    {
                        headers: {
                            "Content-Type": "multipart/form-data",
                        },
                    },
                )
                .then((res) => (res.status === 201 ? alert("Продукт добавлена") : alert("Продукт уже существует")));
        }

        setValue({
            price: "",
            title: "",
            description: "",
            weight: "",
            shortDescription: "",
            articleNumber: "",
            packageQuantity: "",
            width: "",
            density: "",
            winding: "",
            packagingType: "",
        });
        setFiles([]);
        void router.reload();
    };
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setFiles([...files, e.target.files[0]]);
        }
    };

    const handleChangeEdit = (str: string) => {
        const filterData = cargo.filter((el) => el.id === str);
        setData(filterData);
        setSelectedId(str);
        setValue({
            price: filterData[0].price ?? "",
            title: filterData[0].title ?? "",
            description: filterData[0].description ?? "",
            weight: filterData[0].weight ?? 0,
            shortDescription: filterData[0].shortDescription ?? "",
            articleNumber: filterData[0].articleNumber ?? "",
            packageQuantity: filterData[0].packageQuantity ?? "",
            width: filterData[0].width ?? "",
            density: filterData[0].density ?? "",
            winding: filterData[0].winding ?? "",
            packagingType: filterData[0].packagingType ?? "",
        });
    };

    return (
        <div className={cx("add-cargo")}>
            <span>{isEdit ? "Редактировать продукт" : "Добавить продукт"}</span>
            <div className={cx("form-cargo")}>
                <Dropdown
                    value={selectedId}
                    onChange={(e) => {
                        isEdit ? handleChangeEdit(e.value as string) : setSelectedId(e.value as string);
                    }}
                    options={isEdit ? cargo : paper}
                    optionLabel={isEdit ? "title" : "name"}
                    optionValue="id"
                    placeholder={isEdit ? "Select a Cargo" : "Select a Product"}
                    className={cx("dropdown")}
                />
                {inputs.map((el) => (
                    <TextField
                        key={el.name}
                        mode="light"
                        type="text"
                        placeholder={el.placeholder}
                        value={value[el.name].toString()}
                        onChange={(e) => handleChange(el.name, e.target.value)}
                    />
                ))}
                <div className={cx("file")}>
                    <span>Загрузить картинку</span>
                    <input type="file" accept="image/*" onChange={(e) => handleFileChange(e)} />
                </div>
                {data.length !== 0 && (
                    <div className={cx("preview-container")}>
                        {data[0].pictures.map((el) => (
                            <CustomImage
                                key={el}
                                width={400}
                                height={250}
                                className={cx("image")}
                                src={`${API_BASE}/picture/${el ?? "0"}`}
                                alt="deletePhoto"
                            />
                        ))}
                    </div>
                )}
                <Button mode="green" label="Добавить" onClick={onSubmit} />
            </div>
        </div>
    );
};
