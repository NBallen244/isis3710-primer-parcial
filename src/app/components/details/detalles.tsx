"use client";
import {getBgColor, getBorderColor } from "@/app/colores";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { infoPok } from "../home/tarjetaPokemon";
import { useTranslations } from "next-intl";


const DetallePokemon=({id}:{id:number})=>{
    const t=useTranslations("Detail")
    const setText=(text:string)=>{
        return text.charAt(0).toUpperCase()+text.slice(1);
    };
    
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
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`).then(res=>res.json()).then(data=>setInfo(data));
    },[]);
    console.log(id);
    return (
        <div className={`border ${getBorderColor(info.types[0].type.name)} border-10 p-4 w-screen h-screen grid grid-cols-2 justify-items-center items-center rounded-xl h-full w-screen`}>
        <h1 className="col-span-2 text-2xl text-black font-bold">{setText(info.name)}-{t("detail")}</h1>
        <div className={`size-full bg-white border border-5 ${getBorderColor(info.types[0].type.name)} justify-center items-center`}><img src={info.sprites.front_default!} alt={info.name}  className="size-full mb-2 object-contain flex flex-col justify-items-center"/></div>
        <div className="size-full ">
            <h3 className="text-lg text-black">Height: {info.height}</h3>
            <p className="text-lg text-black">Weight: {info.weight}</p>
            <div><label className="text-lg text-black">Abilities:</label>
            {info.abilities.map((ability)=>(<p key={ability.ability.name} className="text-lg font-bold text-black">{ability.ability.name}</p>))}
            </div>
            <div ><label className="text-lg font-bold text-black">Types:</label>
            {info.types.map((type)=>(<div key={type.type.name} className={`${getBgColor(type.type.name)} rounded-xl flex flex-row`}><p className="text-lg font-bold text-white">{type.type.name}</p></div>))}
            </div>  
        </div>
        </div>
    );
}

export default DetallePokemon;