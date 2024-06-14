'use client';

import Link from 'next/link';
import FuncionarioList from './components/FuncionarioList';
import Image from 'next/image';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import { useState } from 'react';

export default function EditarFuncionario() {
  const [searchClient, setSearchClient] = useState('');
  return (
    <>
      <header className='bg-zinc-800 h-20 flex items-center justify-between px-4 py-12'>
        <div>
          <Image
            className='border border-zinc-200 rounded-full'
            src='/fotoPerfilFuncionario.svg'
            width='70'
            height='70'
            alt='foto perfil'
            property='true'
          />
        </div>
        <span className='text-xl font-semibold text-zinc-200 tracking-wider mr-3'>
          ARCHIP
        </span>
      </header>
      <main>
        <section className='flex flex-col items-center gap-4 px-7 m-4'>
          <h1 className='text-2xl'>Funcionários</h1>
        </section>
        <section className='w-full flex items-center justify-between mt-4 px-32'>
          <Link
            href={'/gerente'}
            replace
            className='daisy-btn daisy-btn-active daisy-btn-primary bg-blue-800 hover:bg-blue-600 w-40'
          >
            Voltar
          </Link>

          <label className='input-rounded input flex items-center gap-2 bg-zinc-200 text-zinc-900'>
            <input
              type='text'
              className='input-rounded input text-zinc-900 bg-zinc-200 border-x-0 rounded-none '
              placeholder='Pesquisar Cliente'
              onKeyDown={(e) => {
                e.key === 'Enter'
                  ? setSearchClient(e.target.value)
                  : console.log(e.target.value);
              }}
            />
            <FaMagnifyingGlass className='text-xl' />
          </label>
        </section>
        <section className='w-full flex flex-col justify-center m-8 gap-4'>
          <FuncionarioList list={searchClient} />
        </section>
      </main>
    </>
  );
}
