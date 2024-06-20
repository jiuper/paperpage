import { useState } from "react";
import cnBind from "classnames/bind";
import { useRouter } from "next/router";
import { Column } from "primereact/column";
import type { DataTableSelectionSingleChangeEvent } from "primereact/datatable";
import { DataTable } from "primereact/datatable";

import type { GetCargoDto } from "@/entities";
import { Button } from "@/shared/ui/Button";
import { CustomImage } from "@/shared/ui/CustomImage";

import styles from "./AssortCards.module.scss";

const cx = cnBind.bind(styles);
type AssortCardsProps = {
    cargo: GetCargoDto[];
    title: string;
    handleOrder?: (val: string) => void;
};
export const AssortCards = ({ cargo, title, handleOrder }: AssortCardsProps) => {
    const router = useRouter();

    const searchBodyTemplate = (data: GetCargoDto, index: string) => {
        return <Button mode="green" label="Заказать" onClick={() => handleOrder?.(data?.title ?? "")} />;
    };
    const imageTemplate = (data: GetCargoDto, index: string) => {
        return (
            <CustomImage
                width={134}
                height={90}
                src={`https://papers-api-4meo.onrender.com/picture/${data.pictures[+index] ?? "0"}`}
                alt="default"
            />
        );
    };

    const columns = [
        { field: "0", header: "Фото", Body: imageTemplate },
        { field: "1", header: "Фактура", Body: imageTemplate },
        { field: "shortDescription", header: "Описание" },
        { field: "articleNumber", header: "Артикул" },
        { field: "packageQuantity", header: "Кол-во в упаковке" },
        { header: "", Body: searchBodyTemplate },
    ];

    const onRowSelect = (event: DataTableSelectionSingleChangeEvent<GetCargoDto[]>) => {
        void router.push(`/assortment/${event.value.paperId}/${event.value.id}`);
    };

    return (
        <div className={cx("assort-cards")}>
            <h3>{title}</h3>
            <DataTable
                selectionMode="single"
                onSelectionChange={(e) => onRowSelect(e)}
                value={cargo}
                tableStyle={{ minWidth: "50rem" }}
            >
                {columns.map((col) => (
                    <Column
                        key={col.field}
                        field={col.field}
                        body={col.Body ?(data: GetCargoDto, { field }) => col.Body?.(data, field) : null}
                        header={col.header}
                    />
                ))}
            </DataTable>
        </div>
    );
};
