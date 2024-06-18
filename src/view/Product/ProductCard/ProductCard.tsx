import cnBind from "classnames/bind";

import type { GetCargoDto } from "@/entities";
import { Button } from "@/shared/ui/Button";
import { CustomImage } from "@/shared/ui/CustomImage";

import styles from "./ProductCard.module.scss";

const cx = cnBind.bind(styles);
type ProductCardProps = {
    product: GetCargoDto;
    handleOrder: (val: string) => void;
};
export const ProductCard = ({ product, handleOrder }: ProductCardProps) => {
    return (
        <div className={cx("product-card")}>
            <div className={cx("header")}>
                <CustomImage className={cx("image")} src="" alt="" />
                <div className={cx("info")}>
                    <h3>{product.title}</h3>
                    <span className={cx("article")}>Артикул: {product.articleNumber}</span>
                    <div className={cx("more")}>
                        <p>
                            Кол-во в упаковке: <span>{product.packageQuantity}</span>
                        </p>
                        <p>
                            Ширина, см <span>{product.width}</span>
                        </p>
                        <p>
                            Плотность, г/кв.м <span>{product.density}</span>
                        </p>
                        <p>
                            Намотка, м <span>{product.winding}</span>
                        </p>
                        <p>
                            Тип упаковки <span>{product.packagingType}</span>
                        </p>
                    </div>
                    <div className={cx("footer")}>
                        <h3>Цена по запросу</h3>
                        <div className={cx("buttons")}>
                            <Button
                                onClick={() => handleOrder(product?.title ?? "")}
                                mode="green"
                                label="Быстрый заказ"
                            />
                            <Button mode="white-green" label="Оставить заявку" />
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx("description")}>
                <span>Описание</span>
                <p>{product.description}</p>
            </div>
        </div>
    );
};
