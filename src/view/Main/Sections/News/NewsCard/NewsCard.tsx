import cnBind from "classnames/bind";
import Link from "next/link";

import { CustomImage } from "@/shared/ui/CustomImage";

import styles from "./NewsCard.module.scss";

const cx = cnBind.bind(styles);
type NewsCardProps = {
    id: string;
    src: string;
    alt: string;
    date: string;
    title: string;
    text: string;
};

export const NewsCard = ({ date, title, text, src, alt, id }: NewsCardProps) => {
    return (
        <div className={cx("news-card")}>
            <CustomImage width={400} height={250} className={cx("image")} src={src} alt={alt} />
            <span>{date}</span>
            <h3>{title}</h3>
            <div className={cx("text")}>
                <p>{text}</p>
            </div>
            <Link className={cx("link")} href={`/news/${id}`}>
                Читать
            </Link>
        </div>
    );
};
