import {useTranslations} from 'next-intl';
import ListaPokemones from '../components/home/listaPokemones';
export default function Home() {
  const t = useTranslations('HomePage');
  return (
    <ListaPokemones/>
  );
}
