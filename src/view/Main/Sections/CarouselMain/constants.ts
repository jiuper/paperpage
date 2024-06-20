export type CarouselMainProps = {
    caption: string;
    description?: string;
    list?: string[];
    label: string;
    url: string;
};

export const itemsCarouselMain: CarouselMainProps[] = [
    {
        caption: "ООО «Техническая бумага - СПб». Успешно работаем для вас с 2013 года",
        description: "Мы являемся единственными производителями бумажной кальки",
        label: "Наша продукция",
        url: "#assortiment",
    },
    {
        caption: "Калька для дизайнерских работ",
        list: ["Тушь", "Карандаш", "Ручка"],
        label: "Смотреть продукцию",
        url: "/assortment/17826f6b-14de-4815-83d8-b092c7381946",
    },
];
