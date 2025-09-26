/* eslint-disable @next/next/no-img-element */
"use client";
import {getBgColor, getBorderColor } from "@/app/colores";
import { useEffect, useState } from "react";
import { infoPok } from "../home/tarjetaPokemon";
import { useTranslations } from "next-intl";


const DetallePokemon=({id}:{id:number})=>{
    const t=useTranslations("Detail")
    const setText=(text:string)=>{
        return text.charAt(0).toUpperCase()+text.slice(1);
    };
    
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
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`).then(res=>res.json()).then(data=>setInfo(data));
    },[id]);
    console.log(id);
    return (
        <div className={`p-4 w-3/4 grid grid-cols-2 justify-self-center justify-items-center gap-10`}>
        <h1 className="col-span-2 text-2xl text-black font-bold">{setText(info.name)}-{t("detail")}</h1>
        <div className={`size-full bg-white border border-5 ${getBorderColor(info.types[0].type.name)} justify-center items-center rounded-xl`}><img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${info.id}.png`} alt={info.name}  className="size-full mb-2 object-contain flex flex-col justify-items-center"/></div>
        <div className="size-full flex flex-col justify-center items-center">
            <div>
            <div className="flex">
                <label className="text-lg text-black font-bold">{t("height")}:</label>
                <span className="text-lg text-black "> {info.height} cm</span>
            </div>
            <div className="flex">
                <label className="text-lg text-black font-bold">{t("weight")}:</label>
                <span className="text-lg text-black "> {info.weight} kg</span>
            </div>
            <div className="flex flex-col">
                <label className="text-lg text-black font-bold">{t("abilities")}:</label>
                <ul className="list-disc list-inside text-black">
                {info.abilities.map((ability)=>(<li key={ability.ability.name} className="text-lg text-black">{ability.ability.name}</li>))}
                </ul>
            </div>
            <div>
                <label className="text-lg font-bold text-black">{t("types")}:</label>
                <div className="grid grid-cols-3 gap-2">
                {info.types.map((type)=>(<span key={type.type.name} className={`${getBgColor(type.type.name)} rounded-xl flex justify-center px-2 text-lg font-bold text-white`}>{setText(type.type.name)}</span>))}
                </div>
            </div> 
            </div> 
        </div>
        </div>
    );
}

export default DetallePokemon;