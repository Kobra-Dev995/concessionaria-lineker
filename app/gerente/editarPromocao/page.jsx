'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FaMagnifyingGlass } from 'react-icons/fa6';

export default function EditarPromocao() {
  const [carrosAPI, setCarrosAPI] = useState([]);

  async function carrosDB() {
    const data = await fetch('/carrosDB.json');
    return data.json();
  }

  async function handleClick() {
    const carrosAPI = await carrosDB();
    setCarrosAPI((prevCarroAPI) => (prevCarroAPI = carrosAPI));
  }

  useEffect(() => {
    return () => {
      handleClick();
    };
  }, []);

  return (
    <>
      <h6 className='text-center font-semibold text-2xl'>Promoção</h6>
      <section className='w-full flex items-center justify-between mt-4 px-28'>
        <Link
          href={'/gerente'}
          replace
          className='daisy-btn daisy-btn-active daisy-btn-secondary bg-blue-800 hover:bg-blue-600 w-40'
        >
          Voltar
        </Link>
        {/* <label className='input-rounded input flex items-center gap-2 bg-zinc-200 text-zinc-900'>
          <input
            type='text'
            className='input-rounded input text-zinc-900 bg-zinc-200 border-x-0 rounded-none '
            placeholder='Pesquisar Carro'
            onKeyDown={(e) => {
              e.key === 'Enter'
                ? setCarrosAPI(e.target.value)
                : console.log(e.target.value);
            }}
          />
          <FaMagnifyingGlass className='text-xl' />
        </label> */}
      </section>
      <section className='flex flex-wrap w-full justify-center gap-12 p-4'>
        {/* <div className='daisy-card w-96 bg-base-100 shadow-xl'>
          <figure>
            <Image
              src='/Promoção 2.png'
              width={1200}
              height={1200}
              alt='carro'
            />
          </figure>
          <div className='daisy-card-body'>
            <h2 className='daisy-card-title'>Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className='daisy-card-actions justify-end'>
              <button className='daisy-btn daisy-btn-primary'>Buy Now</button>
            </div>
          </div>
        </div> */}

        {carrosAPI.map((carro) => {
          return (
            <div className='daisy-card w-96 bg-base-100 shadow-xl'>
              <figure>
                <Image
                  src='/Promoção 2.png'
                  width={1200}
                  height={1200}
                  alt='carro'
                />
              </figure>
              <div className='daisy-card-body'>
                <h2 className='daisy-card-title'>{carro.name}</h2>

                <p className='daisy-alert flex flex-col p-5 py-8'>
                  Promoção Iniciada: <span>14/03/2024</span>
                  Promoção Finaliza: <span>20/07/2024</span>
                </p>
                <div className='daisy-card-actions justify-end'>
                  <Link
                    href={`./editarVeiculo/${carro.name}`}
                    className='daisy-btn daisy-btn-primary'
                  >
                    Comprar Agora
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
}
