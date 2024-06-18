import cnBind from "classnames/bind";

import copyWomen from "@/shared/assests/copy-women.png";
import { NewsCard } from "@/view/Main/Sections/News/NewsCard";
import maketWomen from "@/shared/assests/maket-women.png";
import paperWomen from "@/shared/assests/paper-women.png";

import styles from "./News.module.scss";

const cx = cnBind.bind(styles);
const newsList = [
    {
        src: maketWomen,
        data: "31.03.2024",
        title: "Лучшие виды бумаги для офсетной печати",
        text: "Слово калька имеет французское происхождение - calque и переводится  как копия, трафарет, в русском языке...",
    },
    {
        src: paperWomen,
        data: "31.03.2024",
        title: "Создание кальки",
        text: "Слово калька имеет французское происхождение - calque и переводится  как копия, трафарет, в русском языке...",
    },
    {
        src: copyWomen,
        data: "31.03.2024",
        title: "Для чего нужна бумага крафт?",
        text: "Слово калька имеет французское происхождение - calque и переводится  как копия, трафарет, в русском языке...",
    },
];
export const News = () => {
    return (
        <div className={cx("news")}>
            <div className={cx("wrapper", "container")}>
                <h2 className={cx("caption")}>Новости</h2>
                <div className={cx("content")}>
                    {newsList.map((item) => (
                        <NewsCard
                            key={item.title}
                            src={item.src}
                            alt={item.title}
                            date={item.data}
                            title={item.title}
                            text={item.text}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};
