import axios from "axios";

import type { Category, GetCargoDto, GetNewsDto, GetPaperDto } from "@/entities";
import { Admin } from "@/view";
import { API_BASE } from "@/shared/constants/private";

export default function IndexPage({
    paper,
    category,
    cargo,
    news,
}: {
    category: Category[];
    cargo: GetCargoDto[];
    news: GetNewsDto[];
    paper: GetPaperDto[];
}) {
    return <Admin news={news} cargo={cargo} paper={paper} category={category} />;
}

export async function getStaticProps() {
    const resCategory = await axios<Category[]>(`${API_BASE}/category`);
    const resPaper = await axios<GetPaperDto[]>(`${API_BASE}/paper`);
    const resCargo = await axios<GetCargoDto[]>(`${API_BASE}/cargo`);
    const resNews = await axios<GetNewsDto[]>(`${API_BASE}/news`);

    const paper = resPaper.data;
    const category = resCategory.data;
    const cargo = resCargo.data;
    const news = resNews.data;

    return {
        props: {
            cargo,
            news,
            paper,
            category,
        },
    };
}
