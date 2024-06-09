import Image from 'next/image';
import Link from 'next/link';

export default function Venda() {
  return (
    <>
      <main className='overflow-hidden'>
        <section className='w-full flex items-center justify-center m-4'>
          <Image
            src={'/comprovante.png'}
            width={1000}
            height={1020}
            alt='compra'
          />
        </section>

        <section className='w-full flex items-center justify-center mt-4'>
          <Link
            href={'/funcionario'}
            replace
            className='daisy-btn daisy-btn-active daisy-btn-secondary bg-blue-800 hover:bg-blue-600 w-40'
          >
            Voltar
          </Link>
        </section>
      </main>
    </>
  );
}
