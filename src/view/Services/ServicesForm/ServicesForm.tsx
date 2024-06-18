import cnBind from "classnames/bind";

import { FormMain } from "@/components/_Forms/FormMain";
import { CustomImage } from "@/shared/ui/CustomImage";
import { arrList } from "@/view/Main/Sections/About";

import styles from "./ServicesForm.module.scss";

const cx = cnBind.bind(styles);
export const ServicesForm = () => {
    return (
        <div className={cx("services-form", "container")}>
            <div className={cx("items")}>
                {arrList.map((el) => (
                    <div className={cx("item")} key={el.caption}>
                        <CustomImage width={40} height={40} src={el.icon} alt={el.caption} />
                        <div className={cx("text")}>
                            <span>{el.caption}</span>
                            <span>{el.desc}</span>
                        </div>
                    </div>
                ))}
            </div>
            <div className={cx("form")}>
                <FormMain />
            </div>
        </div>
    );
};
