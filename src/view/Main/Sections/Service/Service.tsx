import { useState } from "react";
import cnBind from "classnames/bind";
import { useRouter } from "next/router";

import { Button } from "@/shared/ui/Button";

import styles from "./Service.module.scss";

const cx = cnBind.bind(styles);
const arrList = [
    {
        caption: "Технические виды услуг",
        listItem: [
            "Каландрирование",
            "Резка на форматы",
            "Размотка",
            "Перемотка",
            "Изготовление гофрокоробов (небольшие партии)",
        ],
    },
    {
        caption: "Полиграфические услуги",
        listItem: ["Офсетная печать", "Форматная резка", "Изготовление буклетов", "Флексогоафическая печать"],
    },
    {
        caption: "Типографские услуги",
        listItem: [],
    },
];
export const Service = () => {
    const router = useRouter();
    const [isHovering, setIsHovering] = useState(false);
    const [id, setId] = useState(0);
    const handleMouseEnter = (id: number) => {
        setIsHovering(true);
        setId(id);
    };
    const handleClick = (id: number) => void router.push(`/services/${id}`);

    const handleMouseLeave = () => setIsHovering(false);

    return (
        <div className={cx("service")} id="service">
            <div className={cx("wrapper", "container")}>
                <h2 className={cx("title")}>Наши услуги</h2>
                <div className={cx("items")}>
                    {arrList.map((el, i) => (
                        <div
                            className={cx("item", `item_${i + 1}`)}
                            onMouseEnter={() => handleMouseEnter(i)}
                            onMouseLeave={handleMouseLeave}
                            onClick={() => handleClick(i + 1)}
                            key={el.caption}
                        >
                            <span className={cx("caption")}>{el.caption}</span>
                            {isHovering && id === i && (
                                <>
                                    <ul className={cx("list")}>
                                        {el.listItem.map((elem, i) => (
                                            <li className={cx("list-item")} key={i}>
                                                {elem}
                                            </li>
                                        ))}
                                    </ul>
                                    <Button mode="green" label="Подробнее" />
                                </>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
