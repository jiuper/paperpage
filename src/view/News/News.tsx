import cnBind from "classnames/bind";

import type { GetNewsDto } from "@/entities";
import { PageLayout } from "@/layouts/PageLayout";
import { NewsList } from "@/view/Main/Sections/News";
import { NewsCard } from "@/view/News/NewsCard";

import styles from "./News.module.scss";

const cx = cnBind.bind(styles);
type NewsProps = {
    news: GetNewsDto[];
    newsSingle: GetNewsDto;
};
export const News = ({ news, newsSingle }: NewsProps) => {
    return (
        <PageLayout>
            <div className={cx("news")}>
                <div className={cx("content")}>
                    <NewsCard newsSingle={newsSingle} />
                </div>
                <div className={cx("list")}>
                    <NewsList news={news} title="Читать Далее" />
                </div>
            </div>
        </PageLayout>
    );
};
