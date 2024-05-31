import Image from 'next/image';

export default function CarList({ Name, Price, Picture }) {
  return (
    <>
      <div className='sm:w-11/12 w-4/5 py-2 flex items-center flex-wrap justify-around text-xl border-2 border-slate-800/40 rounded-lg'>
        <div className='w-11/12 md:basis-1/4 lg:basis-1/6  flex items-center justify-center'>
          <Image
            src={Picture}
            width={120}
            height={120}
            alt={Name}
            className='basis-full '
          />
        </div>

        <span className='basis-[37%] md:basis-1/4 sm:basis-2/4 lg:basis-1/5'>
          <b>{Name}</b>
        </span>

        <span className='md:basis-1/4 sm:basis-2/4 lg:basis-1/5'>
          <b>{Price}</b>
        </span>
      </div>
    </>
  );
}
