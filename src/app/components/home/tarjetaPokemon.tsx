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
    return (
        <Link href={`/details/${info.id}`}>
        <div className={`border ${getBorderColor(info.types[0].type.name)} border-10 p-4 size-100 flex flex-col justify-items-center items-center rounded-xl`}>
        <img src={info.sprites.front_default!} alt={pokemon.name}  className="w-75 h-75 mb-2 object-contain flex flex-col justify-items-center"/>
        <h2 className="text-lg font-bold text-black">{pokemon.name}</h2>
        <div className={`${getBgColor(info.types[0].type.name)} rounded-xl`}><h3 className={`text-lg font-bold text-black`}>{info.types[0].type.name}</h3></div>
        </div>
        </Link>
    );
}

export default TarjetaPokemon;