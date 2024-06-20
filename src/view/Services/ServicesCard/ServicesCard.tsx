import * as React from "react";
import cnBind from "classnames/bind";
import type { StaticImageData } from "next/image";

import { Button } from "@/shared/ui/Button";
import { CustomImage } from "@/shared/ui/CustomImage";

import styles from "./ServicesCard.module.scss";

const cx = cnBind.bind(styles);
export interface ServiceCardProps {
    image?: StaticImageData;
    title?: string;
    description?: string;
    onClick?: () => void;
}
export const ServicesCard = ({ image, title, description, onClick }: ServiceCardProps) => {
    return (
        <div className={cx("services-card")}>
            <CustomImage className={cx("image")} src={image ?? ""} alt="title" />
            <div className={cx("info")}>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
            <Button onClick={onClick} mode="white-green" label="Заказать услугу" />
        </div>
    );
};
