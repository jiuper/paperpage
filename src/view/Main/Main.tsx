import cnBind from "classnames/bind";

import { PageLayout } from "@/layouts/PageLayout";
import { About } from "@/view/Main/Sections/About/About";
import { FormCons } from "@/view/Main/Sections/FormCons";
import { Navigation } from "@/view/Main/Sections/Navigation";
import { Service } from "@/view/Main/Sections/Service";

import styles from "./Main.module.scss";

const cx = cnBind.bind(styles);
export const Main = () => {
    return (
        <PageLayout>
            <div className={cx("about-content")}>
                <About />
                <Navigation />
                <Service />
                <FormCons />
            </div>
        </PageLayout>
    );
};
