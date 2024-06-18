import cnBind from "classnames/bind";

import type { GetNewsDto } from "@/entities";
import src from "@/shared/assests/back-news.png";
import { CustomImage } from "@/shared/ui/CustomImage";

import styles from "./NewsCard.module.scss";

const cx = cnBind.bind(styles);
type NewsCardProps = {
    newsSingle: GetNewsDto;
};
export const NewsCard = ({ newsSingle }: NewsCardProps) => {
    return (
        <div className={cx("news-card")}>
            <div className={cx("wrapper", "container")}>
                <div className={cx("header")}>
                    <div className={cx("caption")}>Новость</div>
                    <span className={cx("date")}>{newsSingle.date}</span>
                </div>
                <h2 className={cx("title")}>{newsSingle.title}</h2>
                <p className={cx("description")}>{newsSingle.description}</p>
                <CustomImage className={cx("image")} src={src} alt={newsSingle.title} />
            </div>
        </div>
    );
};
