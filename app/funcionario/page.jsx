'use client';

import CarList from './components/CarList';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import Carroussel from './components/Carroussel';

export default function Page() {
  return (
    <>
      <main className='overflow-hidden bg-stone-100 text-stone-900'>
        <section className='w-full'>
          <div className='w-full flex items-center justify-end p-4'>
            <label className='input-rounded input flex items-center gap-2 bg-zinc-200 text-zinc-900'>
              <input
                type='text'
                className='input-rounded input text-zinc-900 bg-zinc-200 border-x-0 rounded-none '
                placeholder='Pesquisar Carro'
                onKeyDown={(teclado) =>
                  teclado.key == 'Enter' ? console.log('Fez a busca') : false
                }
              />
              <FaMagnifyingGlass className='text-xl' />
            </label>
          </div>
          <section className='flex flex-col items-center gap-4 px-7 '>
            <CarList
              Name={`BMX A43`}
              Price={`R$ 800.420`}
              Picture={`/arancio-borealis 1 (1).png`}
            />
            <CarList
              Name={`Monstang M43`}
              Price={`R$ 820.950`}
              Picture={`/2517_4 1 (1).png`}
            />
            <CarList
              Name={`Silver Master`}
              Price={`R$ 799.313`}
              Picture={`/destaque-v2 1 (1).png`}
            />
          </section>
        </section>

        <section className='w-full flex flex-col items-center justify-center'>
          <span className='pt-4 text-xl font-semibold'>Promoções</span>
          <Carroussel />
          <span className='daisy-btn-link text-base'>ver mais</span>
        </section>

        <section className='flex justify-center p-5'>
          <a
            href='/page/funcionario/clientes/'
            className='bg-blue-500 text-white font-medium rounded-lg px-6 py-3'
          >
            Buscar Clientes
          </a>
        </section>
      </main>
    </>
  );
}
