import axios from "axios";
import type { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";

import type { GetCargoDto } from "@/entities";
import { API_BASE } from "@/shared/constants/private";
import { Product } from "@/view";

export default function IndexPage({ cargo, product, id }: { cargo: GetCargoDto[]; product: string; id: string }) {
    return <Product cargo={cargo} paperId={id} id={product} />;
}
export const getStaticPaths: GetStaticPaths = async () => {
    const res = await axios<GetCargoDto[]>(`${API_BASE}/cargo`);
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
    const product = ctx?.params?.product as string;
    const id = ctx?.params?.id as string;

    const resGargo = await axios<GetCargoDto[]>(`${API_BASE}/cargo`);

    const cargo = resGargo.data;

    return {
        props: {
            cargo,
            product,
            id,
        },
    };
};
