"use client";
import { BgColorTypes, BorderColorTypes } from "@/app/colores";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import TarjetaPokemon from "./tarjetaPokemon";

export interface Pokemon{
    name:string;
    url:string;
}
export interface Lista{
    results:Pokemon[];
}
export interface infoPok {
    height:number;
    weight:number;
    abilities:object[];
    types:Tipo[];
    sprites:{back_default:string};
};
export interface Tipo {
    slot: number;
      type: {
        name: string;
        url: string;
      }
    }
const ListaPokemones= () =>{
    const t=useTranslations("List")
    const [list, setList]=useState<Pokemon[]>([]);
    useEffect(()=>{
            fetch("https://pokeapi.co/api/v2/pokemon?limit=15").then(res=>res.json()).then(data=>setList(data.results));
    },[]);
    return (
        <div className="grid grid-cols-3 justify-items-center gap-10">
            {list.length === 0 ? <p>{t("no")}</p> : list.map((pokemon)=>(<div key={pokemon.name} className="border border-red-500 p-4">
                <TarjetaPokemon pokemon={pokemon}/>
            </div>))}
        </div>
    );
}

export default ListaPokemones;