'use client';

import CarList from './components/CarList';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import Carroussel from './components/Carroussel';
import { useState } from 'react';
import Image from 'next/image';

const carsDB = [
  {
    id: 1,
    name: 'URUS',
    price: 430095,
    picture: '/arancio-borealis 1 (1).png',
  },
  {
    id: 2,
    name: 'AUDI A6',
    price: 133686,
    picture: '/2517_4 1 (1).png',
  },
  {
    id: 3,
    name: 'BMW X6',
    price: 982095,
    picture: '/destaque-v2 1 (1).png',
  },
  {
    id: 3,
    name: 'BMW X6',
    price: 982095,
    picture: '/destaque-v2 1 (1).png',
  },
  {
    id: 3,
    name: 'BMW X6',
    price: 982095,
    picture: '/destaque-v2 1 (1).png',
  },
  {
    id: 3,
    name: 'BMW X6',
    price: 982095,
    picture: '/destaque-v2 1 (1).png',
  },
  {
    id: 3,
    name: 'BMW X6',
    price: 982095,
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

  var convertToFloatNumber = function (value) {
    value = value.toString();
    if (value.indexOf('.') !== -1 && value.indexOf(',') !== -1) {
      if (value.indexOf('.') < value.indexOf(',')) {
        return parseFloat(value.replace(/,/gi, ''));
      } else {
        return parseFloat(value.replace(/./gi, '').replace(/,/gi, '.'));
      }
    } else {
      return parseFloat(value);
    }
  };

  Number.prototype.formatMoney = function (c, d, t) {
    var n = this,
      c = isNaN((c = Math.abs(c))) ? 2 : c,
      d = d == undefined ? '.' : d,
      t = t == undefined ? ',' : t,
      s = n < 0 ? '-' : '',
      i = parseInt((n = Math.abs(+n || 0).toFixed(c))) + '',
      j = (j = i.length) > 3 ? j % 3 : 0;
    return (
      s +
      (j ? i.substr(0, j) + t : '') +
      i.substr(j).replace(/(\d{3})(?=\d)/g, '$1' + t) +
      (c
        ? d +
          Math.abs(n - i)
            .toFixed(c)
            .slice(2)
        : '')
    );
  };

  function formatNumber(value) {
    convertToFloatNumber(value);
    return value.formatMoney(2, ',', '.');
  }

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

      <main className='overflow-hidden bg-stone-100 text-stone-900'>
        <section className='w-full'>
          <div className='w-full flex items-center justify-between p-4'>
            {/* You can open the modal using document.getElementById('ID').showModal() method */}
            <button
              className='daisy-btn bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg px-6 py-3'
              onClick={() => document.getElementById('my_modal_3').showModal()}
            >
              open modal
            </button>

            <dialog id='my_modal_3' className='daisy-modal'>
              <div className='daisy-modal-box'>
                <form method='dialog'>
                  <button className='daisy-btn daisy-btn-sm daisy-btn-circle daisy-btn-ghost absolute right-2 top-2'>
                    ✕
                  </button>
                </form>

                <section className=' flex flex-col items-center justify-center'>
                  <span className='pt-4 text-xl font-semibold'>Promoções</span>
                  <div className='w-full flex items-center justify-center flex-col px-4'>
                    <Carroussel />
                  </div>
                  <span className='daisy-btn-link text-base'>ver mais</span>
                </section>
              </div>
            </dialog>

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
                  Price={`R$ ${formatNumber(car.price)}`}
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
            href='/funcionario/clientes/'
            className='bg-blue-500 text-white font-medium rounded-lg px-6 py-3'
          >
            Buscar Clientes
          </a>
        </section>
      </main>
    </>
  );
}
