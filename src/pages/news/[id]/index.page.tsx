import axios from "axios";
import type { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";

import type { GetNewsDto } from "@/entities";
import { API_BASE } from "@/shared/constants/private";
import { News } from "@/view";

export default function IndexPage({ id, news }: { id: string; news: GetNewsDto[] }) {
    const newsSingle = news.filter((el) => el.id === id);

    return <News news={news} newsSingle={newsSingle[0]} />;
}
export const getStaticPaths: GetStaticPaths = async () => {
    const res = await axios<GetNewsDto[]>(`${API_BASE}/news`);
    const news = res.data;

    return {
        paths: news.map((item) => {
            return {
                params: { id: item.id },
            };
        }),
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps = async (ctx: GetStaticPropsContext) => {
    const id = ctx?.params?.id as string;

    const res = await axios<GetNewsDto[]>(`${API_BASE}/news`);
    const news = res.data;

    return {
        props: {
            news,
            id,
        },
    };
};
