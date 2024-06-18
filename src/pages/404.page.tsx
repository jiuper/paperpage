import { PageLayout } from "@/layouts/PageLayout";
import { NotFound } from "@/view/NotFound";
import { Footer } from "@/components/Footer";

export default function NotFoundPage() {
    return (
        <PageLayout title="Ошибка | Такой страницы не существует">
            <NotFound />
            <Footer/>
        </PageLayout>
    );
}
