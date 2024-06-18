import axios from "axios";

import type { Category, GetNewsDto } from "@/entities";
import { Main } from "@/view";

export default function IndexPage({ category, news }: { category: Category[]; news: GetNewsDto[] }) {
    return <Main category={category} news={news} />;
}

export async function getStaticProps() {
    const res = await axios<Category[]>("https://papers-api-4meo.onrender.com/category");
    const category = res.data;
    const resNews = await axios<GetNewsDto[]>("https://papers-api-4meo.onrender.com/news");
    const news = resNews.data;

    return {
        props: {
            news,
            category,
        },
    };
}
