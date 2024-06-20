export type CarouselMainProps = {
    caption: string;
    description?: string;
    list?: string[];
};

export const itemsCarouselMain: CarouselMainProps[] = [
    {
        caption: "ООО «Техническая бумага - СПб». Успешно работаем для вас с 2013 года",
        description: "Мы являемся единственными производителями бумажной кальки",
    },
    {
        caption: "ООО «Техническая бумага - СПб». Успешно работаем для вас с 2013 года",
        list: ["Тушь", "Карандаш", "Ручка"],
    },
];
