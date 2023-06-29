import { useStore } from '@/lib/store';
import Image from 'next/image';
export const getData = async () => {
  const res = await fetch(`http://localhost:3000/api/search`);
  return res.json();
};

export default async function Home() {
  return (
    <main className=''>
      Home
    </main>
  );
}
