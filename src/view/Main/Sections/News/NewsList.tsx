import cnBind from "classnames/bind";

import type { GetNewsDto } from "@/entities";
import IMG from "@/shared/assests/copy-women.png";
import { NewsCard } from "@/view/Main/Sections/News/NewsCard";

import styles from "./NewsList.module.scss";

const cx = cnBind.bind(styles);

export const NewsList = ({ news, title = "Новости" }: { news: GetNewsDto[]; title?: string }) => {
    return (
        <div className={cx("news")}>
            <div className={cx("wrapper", "container")}>
                <h2 className={cx("caption")}>{title}</h2>
                <div className={cx("content")}>
                    {news.slice(0, 3).map((item) => (
                        <NewsCard
                            id={item.id}
                            key={item.title}
                            src={IMG.src}
                            alt={item.title}
                            date={item.date}
                            title={item.title}
                            text={item.description}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};
