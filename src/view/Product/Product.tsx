import { useMemo } from "react";
import cnBind from "classnames/bind";

import { type GetCargoDto } from "@/entities";
import { PageLayout } from "@/layouts/PageLayout";
import { AssortCards } from "@/view/Assortment/AssortCards";
import { ProductCard } from "@/view/Product/ProductCard";

import styles from "./Product.module.scss";

const cx = cnBind.bind(styles);
type ProductProps = {
    paperId: string;
    cargo: GetCargoDto[];
};
export const Product = ({ cargo, paperId }: ProductProps) => {
    const product = useMemo(() => cargo.filter((el) => el.paperId === paperId), [cargo, paperId]);

    return (
        <PageLayout>
            <div className={cx("product", "container")}>
                <ProductCard product={product[0]} />
                <AssortCards title="Похожая продукция" cargo={cargo.filter((el) => el.weight === product[0].weight)} />
            </div>
        </PageLayout>
    );
};
