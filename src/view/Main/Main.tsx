import type { Category, GetNewsDto } from "@/entities";
import { PageLayout } from "@/layouts/PageLayout";
import { About } from "@/view/Main/Sections/About/About";
import { FormCons } from "@/view/Main/Sections/FormCons";
import { Navigation } from "@/view/Main/Sections/Navigation";
import { NewsList } from "@/view/Main/Sections/News/NewsList";
import { Service } from "@/view/Main/Sections/Service";

type MainProps = { category: Category[]; news: GetNewsDto[] };

export const Main = ({ category, news }: MainProps) => {
    return (
        <PageLayout>
            <About />
            <Navigation category={category} />
            <Service />
            <FormCons />
            <NewsList news={news} />
        </PageLayout>
    );
};
