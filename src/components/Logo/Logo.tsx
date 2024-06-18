import cnBind from "classnames/bind";
import { useRouter } from "next/router";

import logo from "@/shared/assests/image 3.png";
import { Routes } from "@/shared/constants/Routing";
import { CustomImage } from "@/shared/ui/CustomImage";

import styles from "./Logo.module.scss";

const cx = cnBind.bind(styles);
type TLogo = {
    hidden?: boolean;
    classNameLabel?: string;
};
export const Logo = ({ hidden, classNameLabel }: TLogo) => {
    const router = useRouter();

    return (
        <div className={cx("logo", { hidden })} onClick={() => router.push(Routes.HOME)}>
            <CustomImage src={logo} alt="tpaper" className={cx("image")} />
            <div className={cx("text", classNameLabel)}>
                <span className={cx("title")}>ТЕХНИЧЕСКАЯ БУМАГА</span>
                <span className={cx("label")}>Работаем с 2013 года</span>
            </div>
        </div>
    );
};
