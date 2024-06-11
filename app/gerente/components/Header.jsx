import Image from 'next/image';

export default function Header() {
  return (
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
  );
}
