import type { Category } from "@/entities";
import { PageLayout } from "@/layouts/PageLayout";
import { About } from "@/view/Main/Sections/About/About";
import { FormCons } from "@/view/Main/Sections/FormCons";
import { Navigation } from "@/view/Main/Sections/Navigation";
import { News } from "@/view/Main/Sections/News/News";
import { Service } from "@/view/Main/Sections/Service";

type MainProps = { category: Category[] };

export const Main = ({ category }: MainProps) => {
    return (
        <PageLayout>
            <About />
            <Navigation category={category} />
            <Service />
            <FormCons />
            <News />
        </PageLayout>
    );
};
