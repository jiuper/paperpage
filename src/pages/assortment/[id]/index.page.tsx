import axios from "axios";
import type { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";

import type { GetCargoDto, GetPaperDto } from "@/entities";
import { API_BASE } from "@/shared/constants/private";
import { Assortment } from "@/view";

export default function IndexPage({ cargo, paper, id }: { cargo: GetCargoDto[]; paper: GetPaperDto[]; id: string }) {
    return <Assortment paperId={id} paper={paper} cargo={cargo} />;
}
export const getStaticPaths: GetStaticPaths = async () => {
    const res = await axios<GetCargoDto[]>(`${API_BASE}/cargo`);
    const products = res.data;

    return {
        paths: products.map((product) => {
            return {
                params: { id: product.paperId },
            };
        }),
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps = async (ctx: GetStaticPropsContext) => {
    const id = ctx?.params?.id as string;

    const resGargo = await axios<GetCargoDto[]>(`${API_BASE}/cargo`);
    const resPaper = await axios<GetPaperDto[]>(`${API_BASE}/paper`);

    const cargo = resGargo.data;
    const paper = resPaper.data;

    return {
        props: {
            cargo,
            paper,
            id,
        },
    };
};
