export interface IRouting {
    path: string;
    name: string;
    mode: boolean;
}
export const Routes = {
    HOME: "/",
    INFORMATION: "/information",
    ADVANTAGES: "/advantages",
    PEOPLE: "/people",
    ASSORTIMENT: "#",
    SERVICES: "#",
    TRACINGPAPER: "/tracingpaper",

};
export const ROUTING_LEVEL_ONE: IRouting[] = [
    {
        path: Routes.INFORMATION,
        name: "Информация",
        mode: false,
    },
    {
        path: Routes.ADVANTAGES,
        name: "Преимущества",
        mode: false,
    },
    {
        path: Routes.PEOPLE,
        name: "Люди",
        mode: false,
    },
    {
        path: Routes.ASSORTIMENT,
        name: "Ассортимент",
        mode: true,
    },
    {
        path: Routes.SERVICES,
        name: "Услуги",
        mode: false,
    },
];

export const ROUTING_LEVEL_TWO: IRouting[] = [
    {
        path: Routes.INFORMATION,
        name: "Калька",
        mode: false,
    },
    {
        path: Routes.ADVANTAGES,
        name: "Ватман в листах",
        mode: false,
    },
    {
        path: Routes.PEOPLE,
        name: "Бумага-крафт",
        mode: false,
    },
    {
        path: Routes.ASSORTIMENT,
        name: "Подпергамент",
        mode: true,
    },
    {
        path: Routes.SERVICES,
        name: "Для упаковки жировлагосодержа-щих продуктов",
        mode: false,
    },
];
