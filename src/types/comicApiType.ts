export type ComicApiItem = {
    image?: {
        super_url?: string; //Main image of the series
    };
    volume?: {
        name?: string;  //Name of the series
    };
    description?: string; //Brief summary of the series
    id: number;
    name?: string;
    title?: string; //Title of the series
    publisher?: string; //Publisher of the series
    cover_date?: string; //Date of the cover
};