import { useMemo, useState } from "react";
import cnBind from "classnames/bind";

import { FormMain } from "@/components/_Forms/FormMain";
import type { GetCargoDto, GetPaperDto } from "@/entities";
import { PageLayout } from "@/layouts/PageLayout";
import { AssortCards } from "@/view/Assortment/AssortCards";
import { NavBarAssort } from "@/view/Assortment/NavBarAssort";

import styles from "./Assortment.module.scss";

const cx = cnBind.bind(styles);
type AssortmentProps = {
    cargo: GetCargoDto[];
    paper: GetPaperDto[];
    paperId: string;
};
const weightList = [40, 52, 60, 80];
export const Assortment = ({ cargo, paper, paperId }: AssortmentProps) => {
    const filterPaper = useMemo(() => paper?.filter((item) => item.id === paperId), [paper, paperId]);
    const [tab, setTab] = useState({ value: filterPaper[0].id, text: filterPaper[0].name });
    const handleChangeTab = (tab: { value: string; text: string }) => setTab(tab);
    const filterCargo = useMemo(() => cargo?.filter((item) => item.paperId.includes(tab.value)), [cargo, tab]);

    return (
        <PageLayout>
            <div className={cx("assortment")}>
                <NavBarAssort tabsList={paper} tab={tab.text} onChangeTab={handleChangeTab} />
                <div className={cx("items", "container")}>
                    <h2>{tab.text}</h2>
                    {weightList.map((weight, i) => (
                        <AssortCards
                            key={weight}
                            title={cargo[i].title ?? ""}
                            cargo={filterCargo.filter((el) => el.weight === weight)}
                        />
                    ))}
                </div>
                <div className={cx("form", "container")}>
                    <FormMain />
                </div>
            </div>
        </PageLayout>
    );
};
