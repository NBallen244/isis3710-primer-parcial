

import DetallePokemon from '@/app/components/details/detalles';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Detalle del Pokémon - PokeApp",
  description: "Consulta información detallada de cada Pokémon: estadísticas, tipos, habilidades y otros datos relevantes de la primera generación",
};

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  return <DetallePokemon id={Number(id)}/>;
}
