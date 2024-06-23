import { useMemo, useState } from "react";
import * as React from "react";
import cnBind from "classnames/bind";

import { FormProduct } from "@/components/_Forms/FormProduct";
import { ModalCallback } from "@/components/_Modals/ModalCallback";
import { ModalOrder } from "@/components/_Modals/ModalOrder";
import { type GetCargoDto } from "@/entities";
import { PageLayout } from "@/layouts/PageLayout";
import { useBooleanState } from "@/shared/hooks";
import { AssortCards } from "@/view/Assortment/AssortCards";
import { ProductCard } from "@/view/Product/ProductCard";

import styles from "./Product.module.scss";

const cx = cnBind.bind(styles);
type ProductProps = {
    id: string;
    paperId: string;
    cargo: GetCargoDto[];
};
export const Product = ({ cargo, paperId, id }: ProductProps) => {
    const product = useMemo(() => cargo.filter((el) => el.paperId === paperId), [cargo, paperId]);
    const [isOpenOrder, onOpenOrder, onCloseOrder] = useBooleanState(false);
    const [isOpen, onOpen, onClose] = useBooleanState(false);
    const [chooseProduct, setChooseProduct] = useState("");
    const handleOrder = (val: string) => {
        setChooseProduct(val);
        onOpenOrder();
    };

    return (
        <PageLayout>
            <div className={cx("product", "container")}>
                <ProductCard
                    handleCallback={onOpen}
                    handleOrder={handleOrder}
                    product={product.filter((el) => el.id === id)[0]}
                />
                <AssortCards
                    handleOrder={handleOrder}
                    title="Похожая продукция"
                    cargo={cargo.filter((el) => el.weight === product[0].weight)}
                />
                <FormProduct />
                <ModalOrder title={chooseProduct} isOpen={isOpenOrder} onClose={onCloseOrder} />
                <ModalCallback isOpen={isOpen} onClose={onClose} />
            </div>
        </PageLayout>
    );
};
