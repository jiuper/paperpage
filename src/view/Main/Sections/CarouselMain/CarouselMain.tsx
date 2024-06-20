import cnBind from "classnames/bind";
import { Carousel } from "primereact/carousel";

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
    const templateMain = (item: CarouselMainProps) => {
        return (
            <div className={cx("container")}>
                <h1>{item.caption}</h1>
                <div>
                    {item.description && <p>{item.description}</p>}
                    {item.list ? (
                        <ul>
                            {item.list.map((list) => (
                                <li key={list}>{list}</li>
                            ))}
                        </ul>
                    ) : null}
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
