'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const carsDB = [
  {
    id: 1,
    name: 'URUS',
    price: 4.095,
    picture: '/arancio-borealis 1 (1).png',
  },
  {
    id: 2,
    name: 'AUDI A6',
    price: 133.686,
    picture: '/2517_4 1 (1).png',
  },
  {
    id: 3,
    name: 'BMW X6',
    price: 820.95,
    picture: '/destaque-v2 1 (1).png',
  },
];

export default function Promocao() {
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
      console.log('busca');
      handleClick();
    };
  }, []);

  return (
    <>
      <h6 className='text-center font-semibold text-2xl'>Promoção</h6>
      <section className='w-full flex items-center justify-end mt-4 px-28'>
        <Link
          href={'/funcionario'}
          replace
          className='daisy-btn daisy-btn-active daisy-btn-primary bg-blue-800 hover:bg-blue-600 w-40'
        >
          Voltar
        </Link>
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

        {carsDB.map((carro) => {
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
                    href={`/funcionario/${carro.name}`}
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
