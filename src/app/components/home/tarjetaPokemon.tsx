"use client"
import { BgColorTypes, BorderColorTypes, getBgColor, getBorderColor } from "@/app/colores";
import { useEffect, useState } from "react";
import { Pokemon } from "./listaPokemones";
import Image from "next/image";
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
        id:1,
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
    },[]);

    const setText=(text:string)=>{
        return text.charAt(0).toUpperCase()+text.slice(1);
    };
    return (
        <Link href={`/details/${info.id}`}>
        <div className={`border ${getBorderColor(info.types[0].type.name)} border-10 p-4 h-100 w-full flex flex-col justify-items-center items-center rounded-xl bg-white`}>
        <img src={info.sprites.front_default!} alt={pokemon.name}  className="w-full h-3/4 object-fill flex flex-col justify-items-center bg-gray-300"/>
        <h2 className="text-lg font-bold text-black">{setText(pokemon.name)}</h2>
        <div className={`${getBgColor(info.types[0].type.name)} rounded-xl px-2`}><h3 className={`text-lg font-bold text-white`}>{setText(info.types[0].type.name)}</h3></div>
        </div>
        </Link>
    );
}

export default TarjetaPokemon;