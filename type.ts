import { IconType } from "react-icons/lib";

export interface IService{
    id: number,
    title: string,
    about: string,
    Icon: IconType,
}

export interface Iskill{
    id: number,
    name: string,
    level: string,
    Icon : IconType,
}

export interface IProject{
    id: number,
    name:string,
    image_path: string,
    description: string,
    deployed_url: string,
    github_url: string,
    category: Category[],
    key_techs:string[]
}
export type Category = "react" | "node" | "express" | "firebase" | "mongodb" | "laravel" | "web design";