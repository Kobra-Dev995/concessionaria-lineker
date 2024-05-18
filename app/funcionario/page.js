import Image from 'next/image';

export default function Page() {
  return (
    <>
      <main className='overflow-hidden bg-stone-100 text-stone-900'>
        <section className='w-full'>
          <div className='w-full flex justify-end p-4'>
            <input type='text' placeholder='Pesquisar carro' />
          </div>
          <section className='flex flex-col gap-4 px-7 '>
            <div className='flex items-center justify-around text-xl border-2 border-slate-800/40 rounded-lg'>
              <Image src='/arancio-borealis 1 (1).png' width='100' height='100' alt='Carro 1'/>
              <span>BMW X6</span>
              <span>R$ 820.950</span>
            </div>
            <div className='py-4 flex items-center justify-around text-xl border-2 border-slate-800/40 rounded-lg'>
              <Image src='/2517_4 1 (1).png' width='125' height='125' alt='Carro 2' />
              <span>BMW X6</span>
              <span>R$ 820.950</span>
            </div>
            <div className=' flex items-center justify-around text-xl border-2 border-slate-800/40 rounded-lg'>
              <Image src='/destaque-v2 1 (1).png' width='120' height='100' alt='Carro 3'/>
              <span>BMW X6</span>
              <span>R$ 820.950</span>
            </div>
          </section>
        </section>

        <section className='w-full flex flex-col items-center justify-center'>
          <span className='pt-4 text-xl'>Promoções</span>
          <Image src='/carroPromocao.png' width='600' height='600' alt='Promoção' loading='lazy' />
          <span className='underline text-base'>ver mais</span>
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
