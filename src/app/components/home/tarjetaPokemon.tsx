"use client"
import { BgColorTypes, BorderColorTypes } from "@/app/colores";
import { useEffect, useState } from "react";
import { infoPok, Pokemon } from "./listaPokemones";
import Image from "next/image";



const TarjetaPokemon=({pokemon}:{pokemon:Pokemon})=>{
    const colorsType=BgColorTypes;
    const colorsBorder=BorderColorTypes;
    
    const [info, setInfo]=useState<infoPok>({
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
        sprites:{back_default:""}
    });
    useEffect(()=>{
        fetch(`${pokemon.url}`).then(res=>res.json()).then(data=>setInfo(data));
    },[]);
    return (
        <div className="border border-red-500 p-4">
        <Link hred=`/detail/${id}`>
        <img src={info.sprites.back_default!} alt={pokemon.name}  className="w-48 h-48 mb-2 object-contain flex flex-col justify-items-center"/>
        <h2 className="text-lg font-bold text-black">{pokemon.name}</h2>
        <h3 className="text-lg font-bold rounded-xl text-black bg-green-500">{info.types[0].type.name}</h3>
        </Link>
        </div>
    );
}

export default TarjetaPokemon;