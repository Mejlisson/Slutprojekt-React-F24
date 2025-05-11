export type ComicDetailResult = {
    id: number;
    name?: string;
    description?: string;
    image?: {
        super_url?: string;
    };
    volume?: {
        name?: string;
    };
};