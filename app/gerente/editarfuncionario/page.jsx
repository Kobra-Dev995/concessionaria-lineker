import Link from 'next/link';
import ClienteList from './components/ClienteList';
import Image from 'next/image';

export default function EditarFuncionario() {
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
        <section className='flex flex-col items-center gap-4 px-7 '>
          <h1 className='text-2xl'>Clientes</h1>
        </section>
        <section className='w-full flex items-center justify-end mt-4 px-28'>
          <Link
            href={'/gerente'}
            replace
            className='daisy-btn daisy-btn-active daisy-btn-secondary bg-blue-800 hover:bg-blue-600 w-40'
          >
            Voltar
          </Link>

          
        </section>
        <section className='w-full flex justify-center'>
          <ClienteList />
        </section>
      </main>
    </>
  );
}
