import { FaPen, FaPhone } from 'react-icons/fa6';

export default function ClienteList() {
  return (
    <>
      <div className='w-full flex justify-around px-3 py-2'>
        <div className='w-1/3 flex items-center justify-center gap-5'>
          <span className='text-lg'>Nº 1</span>
          <span className='font-semibold'>José Levy Fernandes Lacerda</span>
        </div>

        <div className='w-1/3 flex items-center justify-center gap-4'>
          <span className='flex items-center gap-2'>
            <FaPhone />
            (88) 996465522
          </span>
          <button className='daisy-btn daisy-btn-secondary bg-blue-600'>
            <FaPen />
          </button>
        </div>
      </div>
    </>
  );
}
