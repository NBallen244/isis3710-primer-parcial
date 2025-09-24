"use client"
import { BgColorTypes, BorderColorTypes, getBgColor, getBorderColor } from "@/app/colores";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { infoPok } from "../home/tarjetaPokemon";


const DetallePokemon=({id}:{id:number})=>{
    
    
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
        <div className={`border ${getBorderColor(info.types[0].type.name)} border-10 p-4 w-screen h-screen grid grid-cols-2 justify-items-center items-center rounded-xl`}>
        <img src={info.sprites.front_default!} alt={info.name}  className="w-75 h-75 mb-2 object-contain flex flex-col justify-items-center"/>
        <div>
            <h2 className="text-lg font-bold text-black">{info.name}</h2>
            <p className="text-lg font-bold text-black">Height: {info.height}</p>
            <p className="text-lg font-bold text-black">Weight: {info.weight}</p>
            <div><label className="text-lg font-bold text-black">Abilities:</label>
            {info.abilities.map((ability)=>(<p key={ability.ability.name} className="text-lg font-bold text-black">{ability.ability.name}</p>))}
            </div>
            <div ><label className="text-lg font-bold text-black">Types:</label>
            {info.types.map((type)=>(<div key={type.type.name} className={`${getBgColor(type.type.name)} rounded-xl flex flex-row`}><p className="text-lg font-bold text-black">{type.type.name}</p></div>))}
            </div>  
        </div>
        </div>
    );
}

export default DetallePokemon;