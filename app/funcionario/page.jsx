'use client';

import CarList from './components/CarList';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import Carroussel from './components/Carroussel';
import { useState } from 'react';

const carsDB = [
  {
    id: 1,
    name: 'BMX A43',
    price: 800.42,
    picture: '/arancio-borealis 1 (1).png',
  },
  {
    id: 2,
    name: 'Monstang M43',
    price: 820.95,
    picture: '/2517_4 1 (1).png',
  },
  {
    id: 3,
    name: 'Silver Master',
    price: 799.313,
    picture: '/destaque-v2 1 (1).png',
  },
];

export default function Funcionario() {
  const [searchCar, setSearchCar] = useState('');

  const filterSearchCar = carsDB.filter((car) => {
    const carLowerCase = car.name.toLowerCase();
    const searchLower = searchCar.toLowerCase();

    console.log(carLowerCase);
    return carLowerCase.includes(searchLower);
  });

  return (
    <>
      <main className='overflow-hidden bg-stone-100 text-stone-900'>
        <section className='w-full'>
          <div className='w-full flex items-center justify-end p-4'>
            <label className='input-rounded input flex items-center gap-2 bg-zinc-200 text-zinc-900'>
              <input
                type='text'
                className='input-rounded input text-zinc-900 bg-zinc-200 border-x-0 rounded-none '
                placeholder='Pesquisar Carro'
                onKeyDown={(e) => {
                  e.key === 'Enter'
                    ? setSearchCar(e.target.value)
                    : console.log(e.target.value);
                }}
              />
              <FaMagnifyingGlass className='text-xl' />
            </label>
          </div>
          <section className='flex flex-col items-center gap-4 px-7 '>

            {filterSearchCar.map((car) => {
              return (
                <CarList
                  key={car.id}
                  Name={car.name}
                  Price={`R$ ${car.price}`}
                  Picture={car.picture}
                />
              );
            })}
          </section>
        </section>

        <section className='w-screen flex flex-col items-center justify-center'>
          <span className='pt-4 text-xl font-semibold'>Promoções</span>
          <div className='w-full flex items-center justify-center flex-col px-4'>
            <Carroussel />
          </div>
          <span className='daisy-btn-link text-base'>ver mais</span>
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
