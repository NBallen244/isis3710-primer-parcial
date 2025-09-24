"use client";

import DetallePokemon from '@/app/components/details/detalles';
import { useRouter, useSearchParams } from 'next/navigation';

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  return <DetallePokemon id={Number(id)}/>;
}
