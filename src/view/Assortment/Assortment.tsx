import { useMemo, useState } from "react";
import cnBind from "classnames/bind";

import { FormMain } from "@/components/_Forms/FormMain";
import { ModalOrder } from "@/components/_Modals/ModalOrder";
import type { GetCargoDto, GetPaperDto } from "@/entities";
import { PageLayout } from "@/layouts/PageLayout";
import { useBooleanState } from "@/shared/hooks";
import { AssortCards } from "@/view/Assortment/AssortCards";
import { NavBarAssort } from "@/view/Assortment/NavBarAssort";

import styles from "./Assortment.module.scss";

const cx = cnBind.bind(styles);
type AssortmentProps = {
    cargo: GetCargoDto[];
    paper: GetPaperDto[];
    paperId: string;
};

export const Assortment = ({ cargo, paper, paperId }: AssortmentProps) => {
    const filterPaper = useMemo(() => paper?.filter((item) => item.id === paperId), [paper, paperId]);

    const filterCargo = useMemo(
        () => cargo?.filter((item) => item.paperId.includes(filterPaper[0].id)),
        [cargo, filterPaper],
    );
    const [isOpenOrder, onOpenOrder, onCloseOrder] = useBooleanState(false);
    const [chooseProduct, setChooseProduct] = useState("");
    const handleOrder = (val: string) => {
        setChooseProduct(val);
        onOpenOrder();
    };
    console.log(filterCargo.filter((el) => el.weight?.toString() === filterPaper[0].weights[0]?.toString()));
    console.log(filterCargo[1]?.title);
    return (
        <PageLayout>
            <div className={cx("assortment")} id="assortiment">
                <NavBarAssort tabsList={paper} paperId={paperId} />
                <div className={cx("items", "container")}>
                    <h2>{filterPaper[0].name}</h2>
                    {filterPaper[0].weights.map((weight, i) => (
                        <AssortCards
                            handleOrder={handleOrder}
                            key={weight}
                            title={filterCargo.filter((el) => el.weight?.toString() === weight.toString())[0].title ?? ""}
                            cargo={filterCargo.filter((el) => el.weight?.toString() === weight.toString())}
                        />
                    ))}
                </div>
                <div className={cx("form", "container")}>
                    <FormMain />
                </div>
                <ModalOrder title={chooseProduct} isOpen={isOpenOrder} onClose={onCloseOrder} />
            </div>
        </PageLayout>
    );
};
