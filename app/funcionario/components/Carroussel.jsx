import CarCarroussel from './CarCarroussel';

export default function Carroussel() {
  return (
    <>
      <div className='daisy-carousel w-full'>
        <CarCarroussel ider={1} />
        <CarCarroussel ider={2} />
        <CarCarroussel ider={3} />
        <CarCarroussel ider={4} />
      </div>

      <div className='flex justify-center w-full py-2 gap-2'>
        <a href='#item1' className='daisy-btn daisy-btn-xs'>
          1
        </a>
        <a href='#item2' className='daisy-btn daisy-btn-xs'>
          2
        </a>
        <a href='#item3' className='daisy-btn daisy-btn-xs'>
          3
        </a>
        <a href='#item4' className='daisy-btn daisy-btn-xs'>
          4
        </a>
      </div>
    </>
  );
}
