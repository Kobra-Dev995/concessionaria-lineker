import Image from 'next/image';
import TabelaCarro from './companents/Tabela';
import Link from 'next/link';

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
        <section className='w-full px-4 py-2 flex justify-start gap-80'>
          <section>
            <h2 className='text-xl font-semibold'>• Cores do Veículo</h2>
            <div className='flex gap-2'>
              <div className='bg-yellow-900 w-8 h-8'></div>
              <div className='bg-gray-100 w-8 h-8'></div>
              <div className='bg-blue-950 w-8 h-8'></div>
              <div className='bg-gray-600 w-8 h-8'></div>
            </div>
          </section>
          <section>
            <h2 className='text-xl font-semibold'>• Placa do Veículo</h2>
            <div className='flex gap-2'>
              <span className='text-xl font-medium'>BR43E19</span>
            </div>
          </section>
        </section>

        <section className='w-full px-4 py-2'>
          <h2 className='text-xl font-semibold'>Valor</h2>
          <span className='text-xl font-medium'>R$</span>
        </section>

        <section className='w-full px-4 py-2'>
          <Link
            href={`/funcionario/${nameCar}/venda`}
            className='daisy-btn daisy-btn-active daisy-btn-secondary bg-blue-800 hover:bg-blue-600 w-40'
          >
            Comprar
          </Link>
        </section>
      </main>
    </>
  );
}
