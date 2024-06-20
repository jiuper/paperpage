import cnBind from "classnames/bind";
import { useRouter } from "next/router";
import { Carousel } from "primereact/carousel";

import { Button } from "@/shared/ui/Button";
import type { CarouselMainProps } from "@/view/Main/Sections/CarouselMain/constants";
import { itemsCarouselMain } from "@/view/Main/Sections/CarouselMain/constants";

import styles from "./CarouselMain.module.scss";

const cx = cnBind.bind(styles);
export const CarouselMain = () => {
    const responsiveOptions = [
        {
            breakpoint: "1400px",
            numVisible: 1,
            numScroll: 1,
        },
        {
            breakpoint: "1199px",
            numVisible: 1,
            numScroll: 1,
        },
        {
            breakpoint: "767px",
            numVisible: 1,
            numScroll: 1,
        },
        {
            breakpoint: "575px",
            numVisible: 1,
            numScroll: 1,
        },
    ];
    const route = useRouter();
    const templateMain = (item: CarouselMainProps) => {
        return (
            <div className={cx("container")}>
                <div className={cx("content")}>
                    <h1>{item.caption}</h1>
                    <div className={cx("description")}>
                        {item.description && <span>{item.description}</span>}
                        {item.list ? (
                            <div className={cx("list")}>
                                {item.list.map((list) => (
                                    <div key={list} className={cx("item")}>
                                        <i className="pi pi-check" style={{ color: "#63A38B" }} />
                                        <span>{list}</span>
                                    </div>
                                ))}
                            </div>
                        ) : null}
                    </div>
                    <Button onClick={() => route.push(item.url)} mode="green" label={item.label} />
                </div>
            </div>
        );
    };

    return (
        <div className={cx("carousel-main")}>
            <Carousel
                value={itemsCarouselMain}
                responsiveOptions={responsiveOptions}
                numVisible={1}
                numScroll={1}
                itemTemplate={templateMain}
                className={cx("carousel")}
                prevIcon={cx("pi pi-arrow-left")}
                nextIcon={cx("pi pi-arrow-right")}
            />
        </div>
    );
};
