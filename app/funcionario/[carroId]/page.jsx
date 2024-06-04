import Image from 'next/image';
import TabelaCarro from './companents/Tabela';

export default function Carro({ params }) {
  const nameCar = params.carroId.replace(/%20/g, ' ');
  return (
    <>
      <main>
        <section>
          <div className='flex items-center justify-center bg-zinc-100 relative w-full h-40'>
            <Image
              src='/arancio-borealis 1 (1).png'
              width='505'
              height='220'
              alt='Carro para comprar'
              className='absolute pt-[6rem]'
            />
          </div>
          <div className='bg-primare-blue font-bold text-3xl w-full h-48 flex justify-center items-end p-4 pb-14 gap-8'>
            <span>{nameCar}</span>
            <span>#002</span>
          </div>
        </section>
        <section className='w-full px-4 py-2 space-y-3'>
          <h2 className='text-xl font-semibold'>• Informações do Veículo</h2>
          <TabelaCarro />
        </section>
      </main>
    </>
  );
}
