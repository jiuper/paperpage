import cnBind from "classnames/bind";
import type { StaticImageData } from "next/image";
import Link from "next/link";

import { CustomImage } from "@/shared/ui/CustomImage";

import styles from "./NewsCard.module.scss";

const cx = cnBind.bind(styles);
type NewsCardProps = {
    src: StaticImageData;
    alt: string;
    date: string;
    title: string;
    text: string;
};

export const NewsCard = ({ date, title, text, src, alt }: NewsCardProps) => {
    return (
        <div className={cx("news-card")}>
            <CustomImage className={cx("image")} src={src} alt={alt} />
            <span>{date}</span>
            <h3>{title}</h3>
            <p>{text}</p>
            <Link className={cx("link")} href="/">Читать</Link>
        </div>
    );
};
