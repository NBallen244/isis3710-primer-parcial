import {NextIntlClientProvider, hasLocale} from 'next-intl';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';
import type { Metadata } from "next";
import "@/app/globals.css";
import Header from '../components/layout/header';
import Footer from '../components/layout/footer';

export const metadata: Metadata = {
  title: "Pokedex Nacional - PokeApp",
  description: "Explora la Pokédex de la primera generación: un listado completo de Pokémon con sus características y detalles principales.",
};

type Props = {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
};

export default async function RootLayout({children, params}: Props) {

  const {locale} = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang="en">
      <body>
        <NextIntlClientProvider>
        <Header/>
      <main>
      {children}
      </main>
        <Footer/>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
