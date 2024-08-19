import axios from "axios";

import type { Category, GetNewsDto } from "@/entities";
import { API_BASE } from "@/shared/constants/private";
import { Main } from "@/view";

export default function IndexPage({ category, news }: { category: Category[]; news: GetNewsDto[] }) {
    return <Main category={category} news={news} />;
}

export async function getStaticProps() {
    const res = await axios<Category[]>(`${API_BASE}/category`);
    const category = res.data;
    const resNews = await axios<GetNewsDto[]>(`${API_BASE}/news`);
    const news = resNews.data;

    return {
        props: {
            news,
            category,
        },
    };
}
