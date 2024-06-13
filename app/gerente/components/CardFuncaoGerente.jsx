'use client';
import Image from 'next/image';
import Link from 'next/link';
import { FaAngleRight } from 'react-icons/fa6';

export default function CardFuncaoGerente({Name, Desc, Picture, Path}) {
  return (
    <>
      <div className='daisy-card daisy-card-side bg-base-100 shadow-xl flex justify-center'>
        <figure>
          <Image
            src={Picture}
            width={1200}
            height={1200}
            alt='carro'
          />
        </figure>
        <div className='daisy-card-body'>
          <h2 className='daisy-card-title'>{Name}</h2>
          <p>
            {Desc}
          </p>
          <div className='daisy-card-actions justify-start'>
            <div className='daisy-btn bg-blue-600'>
              <Link href={Path} className='flex text-zinc-100'>
                Editar <FaAngleRight />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
