export interface Advantage {
    _id: string;
    title: string;
    description: string;
}

export interface HHData {
    _id: string;
    count: number;
    juniorSalary: number;
    middleSalary: number;
}

export interface RootObject {
    tags: string[];
    _id: string;
    secondCategory: string;
    alias: string;
    title: string;
    category: string;
    seoText: string;
    tagsTitle: string;
    metaTitle: string;
    metaDescription: string;
    firstCategory: number;
    advantages: Advantage[],
    createdAt: Date,
    updatedAt: Date,
    hh: HHData;
}