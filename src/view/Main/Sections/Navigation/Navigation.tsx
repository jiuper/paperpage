import cnBind from "classnames/bind";
import { useRouter } from "next/router";

import type { Category } from "@/entities";
import { Button } from "@/shared/ui/Button";
import { ImgPreview } from "@/shared/ui/ImgPreview/ImgPreview";

import styles from "./Navigation.module.scss";

const cx = cnBind.bind(styles);
type NavigationProps = { category: Category[] };
export const Navigation = ({ category }: NavigationProps) => {
    const router = useRouter();
    const normalizeList =
        category[1].papers.length < 3
            ? category[1].papers?.push({
                  description: "",
                  name: "",
                  applicationSphere: [],
                  id: "",
                  weights: [],
              })
            : category[1].papers;

    return (
        <div className={cx("navigation")} id="assortiment">
            <div className={cx("wrapper", "container")}>
                <div className={cx("content")}>
                    {category.map((el) => (
                        <div key={el.id} className={cx("top")}>
                            <h2>{el.name}</h2>
                            <div className={cx("items")}>
                                {el.papers?.map((paper, i) => (
                                    <div key={i} className={cx("item", paper.name === "" && "hidden")}>
                                        <div className={cx("header")}>
                                            <h3>{paper.name}</h3>
                                            {paper.description ? (
                                                <span className={cx("description")}>{paper.description}</span>
                                            ) : null}
                                        </div>
                                        <div className={cx("points")}>
                                            {paper.applicationSphere?.map((sphere, index) => (
                                                <div key={index} className={cx("point", sphere === "" && "hidden")}>
                                                    <i
                                                        className={cx("icon", "pi pi-check")}
                                                        style={{ color: "#63A38B" }}
                                                    />
                                                    <span>{sphere}</span>
                                                </div>
                                            ))}
                                        </div>
                                        <Button
                                            onClick={() => router.push(`/assortment/${paper.id}`)}
                                            mode="green"
                                            label="Смотреть"
                                        />

                                        <ImgPreview filesImg={paper.picture} />
                                    </div>
                                ))}
                            </div>
                            <div />
                        </div>
                    ))}

                    <div className={cx("form")}>
                        <div className={cx("field")}>
                            <h3>Скачайте прайс - лист</h3>
                            <span>
                                Менеджеры компании с радостью ответят на ваши вопросы и произведут расчет стоимости
                                заказа и подготовят индивидуальное коммерческое предложение
                            </span>
                            <Button className={cx("button")} mode="white" label="Скачать прайс-лист (pdf)" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
