import type { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";

import { Services } from "@/view";
import { listItems } from "@/view/Services/constants";

export default function IndexPage({ id }: { id: string }) {
    const service = listItems.find((el) => el.id === id);

    return <Services id={id} serviceInfo={service} />;
}
export const getStaticPaths: GetStaticPaths = () => {
    const products = ["1", "2", "3"];

    return {
        paths: products.map((product) => {
            return {
                params: { id: product },
            };
        }),
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps = (ctx: GetStaticPropsContext) => {
    const id = ctx?.params?.id as string;

    return {
        props: {
            id,
        },
    };
};
