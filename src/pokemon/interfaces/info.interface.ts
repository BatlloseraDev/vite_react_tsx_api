export interface Info{
    id: Number;
    name: string;
    url: string;
    img: string;
    descriptions: {
        language: string;
        edition:string;
        info: string;
    }[];
}
