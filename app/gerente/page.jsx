'use client';

import Image from 'next/image';
import Carroussel from './components/Carroussel';
import CardFuncaoGerente from './components/CardFuncaoGerente';

export default function Gerente() {
  return (
    <>
      <header className='bg-zinc-100 h-20 flex items-center justify-between px-4 py-12'>
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
        <span className='text-xl font-semibold text-zinc-700 tracking-wider mr-3'>
          ARCHIP
        </span>
      </header>

      <main>
        <div className='daisy-carousel w-full border border-black'>
          <div id='item1' className='daisy-carousel-item w-full'>
            <img src='/Carros vendidos.png' className='w-full' />
          </div>
        </div>
        <div className='flex justify-center w-full py-2 gap-2'>
          {/* <a href='#item1' className='daisy-btn daisy-btn-xs'>
          1
          </a> */}
        </div>
        <section className='w-full flex justify-center'>
          <span className='font-semibold text-3xl'>Promoções</span>
        </section>
        <div className='w-full flex items-center justify-center flex-col px-4'>
          <Carroussel />
        </div>

        <section className='flex flex-col justify-center gap-6 px-10 mb-8'>
          <CardFuncaoGerente
            Name={'Editar Funcionários'}
            Desc={`Controle total de todos os clientes cadastrados podendo buscar, excluir e cadastrar novos funcionários para a empresa`}
            Picture={'/Rectangle 15.png'}
            Path={'/gerente/editarfuncionario'}
          />
          <CardFuncaoGerente
            Name={'Editar Veículos'}
            Desc={`Controle total de todos os veículos cadastrados podendo buscar, excluir e cadastrar novos veículos`}
            Picture={'/Rectangle 16.png'}
            Path={'/gerente/editarVeiculo'}
          />
        </section>
      </main>
    </>
  );
}
