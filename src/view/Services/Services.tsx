// @flow
import * as React from "react";
import cnBind from "classnames/bind";

import { PageLayout } from "@/layouts/PageLayout";
import { Button } from "@/shared/ui/Button";
import type { ServiceCardProps } from "@/view/Services/ServicesCard";
import { ServicesCard } from "@/view/Services/ServicesCard";
import { ServicesForm } from "@/view/Services/ServicesForm";

import styles from "./Services.module.scss";

const cx = cnBind.bind(styles);

export interface ServiceInfoProps {
    id: string;
    titlePage?: string;
    descriptionPage?: string;
    descriptionList?: string[];
    caption?: string;
    listItems?: ServiceCardProps[];
}
type ServicesProps = {
    id?: string;
    serviceInfo?: ServiceInfoProps;
};
export const Services = ({ id, serviceInfo }: ServicesProps) => {
    return (
        <PageLayout>
            <div className={cx("services")}>
                <div className={cx("header")}>
                    <div className={cx("info", "container")}>
                        <h1>{serviceInfo?.titlePage}</h1>
                        <p>{serviceInfo?.descriptionPage}</p>
                        <Button mode="white" label="Заказать услугу" />
                    </div>
                </div>
                <div className={cx("wrapper")}>
                    <div className={cx("container")}>
                        <div className={cx("descriptions")}>
                            {serviceInfo?.descriptionList?.map((el) => (
                                <span key={el}>{el}</span>
                            ))}
                        </div>
                        <p className={cx("caption")}>{serviceInfo?.caption}</p>
                        <div className={cx("cards")}>
                            {serviceInfo?.listItems?.map((el) => (
                                <ServicesCard key={el.title} {...el} />
                            ))}
                        </div>
                    </div>
                </div>
                <ServicesForm />
            </div>
        </PageLayout>
    );
};
