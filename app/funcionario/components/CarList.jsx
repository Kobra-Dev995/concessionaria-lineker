import Image from 'next/image';

export default function CarList({ Name, Price, Picture }) {
  return (
    <>
      <div className='sm:w-11/12 w-4/5 py-2 flex items-center flex-wrap justify-around text-xl border-2 border-slate-800/40 rounded-lg'>
        <div className='w-11/12 flex items-center justify-center'>
          <Image
            src={Picture}
            width={120}
            height={120}
            alt={Name}
            className='basis-full sm:hidden'
          />
        </div>

        <span className='basis-[37%] sm:basis-2/4'>
          <b>{Name}</b>
        </span>

        <span className='basis- sm:basis-2/4'>
          <b>{Price}</b>
        </span>
      </div>
    </>
  );
}
