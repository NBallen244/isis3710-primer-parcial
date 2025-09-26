/* eslint-disable @next/next/no-img-element */
"use client"
import { getBgColor, getBorderColor } from "@/app/colores";
import { useEffect, useState } from "react";
import { Pokemon } from "./listaPokemones";
import { Link } from "@/i18n/navigation";


export interface infoPok {
    id:number;
    name:string;
    height:number;
    weight:number;
    abilities:{ability:{name:string}}[];
    types:Tipo[];
    sprites:{front_default:string};
};
export interface Tipo {
    slot: number;
      type: {
        name: string;
        url: string;
      }
    };
const TarjetaPokemon=({pokemon}:{pokemon:Pokemon})=>{
    
    
    const [info, setInfo]=useState<infoPok>({
        id:0,
        name:"",
        height:0,
        weight:0,
        abilities:[],
        types:[{
            slot: 0,
      type: {
        name: "",
        url: "/pokemon-logo.png",
      }
    }
    ],
        sprites:{front_default:""}
    });
    useEffect(()=>{
        fetch(`${pokemon.url}`).then(res=>res.json()).then(data=>setInfo(data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    const setText=(text:string)=>{
        return text.charAt(0).toUpperCase()+text.slice(1);
    };
    return (
        <Link href={`/details/${info.id}`}>
        <div className={`border ${getBorderColor(info.types[0].type.name)} border-10 p-4 h-100 w-full h-1/2 flex flex-col justify-items-center items-center rounded-xl bg-white gap-3`}>
        <div className="bg-gray-300 flex justify-center items-center h-3/4 w-full">
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${info.id}.png`} alt={pokemon.name}  className="size-3/4"/>
        </div>
        <h2 className="text-lg font-bold text-black">{setText(pokemon.name)}</h2>
        <div className={`${getBgColor(info.types[0].type.name)} rounded-xl px-5`}><h3 className={`text-lg font-bold text-white`}>{setText(info.types[0].type.name)}</h3></div>
        </div>
        </Link>
    );
}

export default TarjetaPokemon;