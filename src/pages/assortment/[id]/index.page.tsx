import axios from "axios";
import type { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";

import type { GetCargoDto, GetPaperDto } from "@/entities";
import { Assortment } from "@/view";

export default function IndexPage({
    cargo,
    paper,
    weights,
    id,
}: {
    cargo: GetCargoDto[];
    paper: GetPaperDto[];
    weights: number[];
    id: string;
}) {
    console.log(cargo);

    return <Assortment paperId={id} paper={paper} cargo={cargo} />;
}
export const getStaticPaths: GetStaticPaths = async () => {
    const res = await axios<GetCargoDto[]>("https://papers-api-4meo.onrender.com/cargo");
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

    const resGargo = await axios<GetCargoDto[]>("https://papers-api-4meo.onrender.com/cargo");
    const resPaper = await axios<GetPaperDto[]>("https://papers-api-4meo.onrender.com/paper");
    // const resWeights = await axios.get<number[]>(`https://papers-api-4meo.onrender.com/paper/cargo/weights`, {params: id,});
    const cargo = resGargo.data;
    const paper = resPaper.data;
    const weights: never[] = [];

    return {
        props: {
            cargo,
            paper,
            weights,
            id,
        },
    };
};
