import axios from "axios";

import type { Category } from "@/entities";
import { Main } from "@/view";

export default function IndexPage({ category }: { category: Category[] }) {
    return <Main category={category} />;
}

export async function getStaticProps() {
    const res = await axios<Category[]>("https://papers-api-4meo.onrender.com/category");
    const category = res.data;

    return {
        props: {
            category,
        },
    };
}
