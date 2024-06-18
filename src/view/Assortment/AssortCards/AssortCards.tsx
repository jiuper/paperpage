import { useState } from "react";
import cnBind from "classnames/bind";
import { useRouter } from "next/router";
import { Column } from "primereact/column";
import type { DataTableSelectionSingleChangeEvent } from "primereact/datatable";
import { DataTable } from "primereact/datatable";

import type { GetCargoDto } from "@/entities";
import { Button } from "@/shared/ui/Button";

import styles from "./AssortCards.module.scss";

const cx = cnBind.bind(styles);
type AssortCardsProps = {
    cargo: GetCargoDto[];
    title: string;
    handleOrder?: (val: string) => void;
};
export const AssortCards = ({ cargo, title, handleOrder }: AssortCardsProps) => {
    const router = useRouter();
    const [products] = useState(cargo);

    const searchBodyTemplate = (data: GetCargoDto) => {
        return <Button mode="green" label="Заказать" onClick={() => handleOrder?.(data?.title ?? "")} />;
    };
    const columns = [
        { field: "code", header: "Фото" },
        { field: "name", header: "Фактура" },
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
                value={products}
                tableStyle={{ minWidth: "50rem" }}
            >
                {columns.map((col) => (
                    <Column
                        key={col.field}
                        field={col.field}
                        body={(data: GetCargoDto) => col.Body?.(data)}
                        header={col.header}
                    />
                ))}
            </DataTable>
        </div>
    );
};
