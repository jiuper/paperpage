export enum PictureType {
    MAIN,
    TEXTURE,
    OTHER,
}

export type Category = {
    id?: string;
    name?: string;
    papers: GetPaperDto[];
};
export type GetPaperDto = {
    id: string;
    name: string;
    description?: string;
    applicationSphere: string[];
    categoryId?: string;
    picture?: Buffer;
};

export type GetCargoDto = {
    id: string;
    title?: string;
    weight?: number;
    shortDescription?: string;
    articleNumber?: string;
    packageQuantity?: number;
    description?: string;
    price?: string;
    width?: string;
    density?: string;
    winding?: string;
    packagingType?: string;
    paperId: string;
    pictures?: PicturesShortInfo[];
};

export type PicturesShortInfo = {
    id?: string;
    type?: PictureType;
};

export type GetNewsDto = {
    id: string;
    title: string;
    description: string;
    date: string;
    pictureId: string;
};
