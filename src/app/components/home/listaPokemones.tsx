"use client";
import { BgColorTypes, BorderColorTypes } from "@/app/colores";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import TarjetaPokemon from "./tarjetaPokemon";

export interface Pokemon{
    name:string;
    url:string;
};
export interface Lista{
    results:Pokemon[];
};


const ListaPokemones= () =>{
    const t=useTranslations("List")
    const [list, setList]=useState<Pokemon[]>([]);
    useEffect(()=>{
            fetch("https://pokeapi.co/api/v2/pokemon?limit=15").then(res=>res.json()).then(data=>setList(data.results));
    },[]);
    return (
        <div className="m-5 justify-items-center px-5 w-screen">
        <h1 className="text-2xl text-black font-bold mb-4">{t("listing")}</h1>
        <div className="grid grid-cols-3 justify-items-center gap-5 w-full">
            {list.length === 0 ? <p>{t("no")}</p> : list.map((pokemon)=>(<div key={pokemon.name} className="w-full">
                <TarjetaPokemon pokemon={pokemon}/>
            </div>))}
        </div>
        </div>
    );
}

export default ListaPokemones;