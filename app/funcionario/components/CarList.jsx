import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useRef } from 'react';

export default function CarList({ Name, Price, Picture }) {
  const {push}= useRouter()
  const divPai = useRef()
  function log() {
    const nextPage = divPai.current.childNodes[1].innerText
    push(`/funcionario/${nextPage}`)
  }

  return (
    <>
      <div ref={divPai}
        className='sm:w-11/12 w-4/5 py-2 flex items-center flex-wrap justify-around text-xl border-2 border-slate-800/40 rounded-lg'
      >
        <div className='w-11/12 md:basis-1/4 lg:basis-1/6  flex items-center justify-center'>
          <Image
            src={Picture}
            width={120}
            height={120}
            alt={Name}
            className='basis-full '
          />
        </div>

        <span
          onClick={log}
          className='daisy-btn-link text-blue-900 font-bold cursor-pointer basis-[37%] md:basis-1/4 sm:basis-2/4 lg:basis-1/5'
        >
          {Name}
        </span>

        <span className='md:basis-1/4 font-semibold sm:basis-2/4 lg:basis-1/5'>
          {Price}
        </span>
      </div>
    </>
  );
}
