import axios from "axios";
import type { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";

import type { GetCargoDto } from "@/entities";
import { Product } from "@/view";

export default function IndexPage({ cargo, id }: { cargo: GetCargoDto[]; id: string }) {
    return <Product cargo={cargo} paperId={id} />;
}
export const getStaticPaths: GetStaticPaths = async () => {
    const res = await axios<GetCargoDto[]>("https://papers-api-4meo.onrender.com/cargo");
    const products = res.data;

    return {
        paths: products.map((product) => {
            return {
                params: { id: product.paperId, product: product.id },
            };
        }),
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps = async (ctx: GetStaticPropsContext) => {
    const id = ctx?.params?.id as string;

    const resGargo = await axios<GetCargoDto[]>("https://papers-api-4meo.onrender.com/cargo");

    const cargo = resGargo.data;

    return {
        props: {
            cargo,
            id,
        },
    };
};
