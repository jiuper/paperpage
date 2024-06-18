import cnBind from "classnames/bind";
import { useRouter } from "next/router";

import type { Category } from "@/entities";
import CARDS from "@/shared/assests/cards.png";
import { Button } from "@/shared/ui/Button";
import { CustomImage } from "@/shared/ui/CustomImage";
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
              })
            : category[1].papers;

    return (
        <div className={cx("navigation")}>
            <div className={cx("wrapper", "container")}>
                <div className={cx("content")}>
                    <div className={cx("top")}>
                        <h2>{category[0].name}</h2>
                        <div className={cx("items")}>
                            {category[0].papers?.map((paper, i) => (
                                <div key={i} className={cx("item")}>
                                    <div className={cx("header")}>
                                        <h3>{paper.name}</h3>
                                        {paper.description ? (
                                            <span className={cx("description")}>{paper.description}</span>
                                        ) : null}
                                    </div>
                                    <div className={cx("points")}>
                                        {paper.applicationSphere?.map((sphere, index) => (
                                            <div key={index} className={cx("point")}>
                                                <i className={cx("icon", "pi pi-check")} />
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
                    </div>
                    <div className={cx("bottom")}>
                        <h2>{category[1].name}</h2>
                        <div className={cx("items")}>
                            {category[1].papers?.map((paper, i) => (
                                <div key={i} className={cx("item", paper.name === "" && "hidden")}>
                                    <div className={cx("header")}>
                                        <h3>{paper.name}</h3>
                                        {paper.description ? (
                                            <span className={cx("description")}>{paper.description}</span>
                                        ) : null}
                                    </div>

                                    <div className={cx("points")}>
                                        {paper.applicationSphere?.map((sphere, index) =>
                                            sphere ? (
                                                <div key={index} className={cx("point")}>
                                                    <i className={cx("icon", "pi pi-check")} />
                                                    <span>{sphere}</span>
                                                </div>
                                            ) : null,
                                        )}
                                    </div>
                                    <Button
                                        mode="green"
                                        label="Смотреть"
                                        className={cx(paper.name === "" && "hidden")}
                                    />
                                    <ImgPreview filesImg={paper.picture} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className={cx("form")}>
                    <div className={cx("field")}>
                        <h3>Скачайте прайс - лист</h3>
                        <span>
                            Менеджеры компании с радостью ответят на ваши вопросы и произведут расчет стоимости заказа и
                            подготовят индивидуальное коммерческое предложение
                        </span>
                        <Button className={cx("button")} mode="white" label="Скачать прайс-лист (pdf)" />
                    </div>
                    <CustomImage src={CARDS} alt="forms" />
                </div>
            </div>
        </div>
    );
};
