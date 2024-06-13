'use client';
import CarList from '@/app/funcionario/components/CarList';
import { useState } from 'react';
import { FaMagnifyingGlass } from 'react-icons/fa6';

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
];

export default function EditarVeiculo() {
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
    </>
  );
}
