import { useMemo, useState } from "react";
import cnBind from "classnames/bind";

import { FormProduct } from "@/components/_Forms/FormProduct";
import { ModalOrder } from "@/components/_Modals/ModalOrder";
import { type GetCargoDto } from "@/entities";
import { PageLayout } from "@/layouts/PageLayout";
import { useBooleanState } from "@/shared/hooks";
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
    const [isOpenOrder, onOpenOrder, onCloseOrder] = useBooleanState(false);
    const [chooseProduct, setChooseProduct] = useState("");
    const handleOrder = (val: string) => {
        setChooseProduct(val);
        onOpenOrder();
    };

    return (
        <PageLayout>
            <div className={cx("product", "container")}>
                <ProductCard handleOrder={handleOrder} product={product[0]} />
                <AssortCards handleOrder={handleOrder} title="Похожая продукция" cargo={cargo.filter((el) => el.weight === product[0].weight)} />
                <FormProduct />
                <ModalOrder title={chooseProduct} isOpen={isOpenOrder} onClose={onCloseOrder} />
            </div>
        </PageLayout>
    );
};
