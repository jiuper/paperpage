import axios from "axios";

import type { Category, GetCargoDto, GetNewsDto, GetPaperDto } from "@/entities";
import { Admin } from "@/view";

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
    const resCategory = await axios<Category[]>("https://papers-api-4meo.onrender.com/category");
    const resPaper = await axios<GetPaperDto[]>("https://papers-api-4meo.onrender.com/paper");
    const resCargo = await axios<GetCargoDto[]>("https://papers-api-4meo.onrender.com/cargo");
    const resNews = await axios<GetNewsDto[]>("https://papers-api-4meo.onrender.com/news");

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
