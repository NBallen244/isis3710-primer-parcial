"use client";
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
        <div className="justify-items-center w-full px-10 justify-self-center items-center">
        <h1 className="text-2xl text-black font-bold my-5 ml-10">{t("listing")}</h1>
        <div className="grid grid-cols-3 justify-items-center gap-10 w-full">
            {list.length === 0 ? <p>{t("no")}</p> : list.map((pokemon)=>(<div key={pokemon.name} className="w-full">
                <TarjetaPokemon pokemon={pokemon}/>
            </div>))}
        </div>
        </div>
    );
}

export default ListaPokemones;