import ClienteList from './components/ClienteList';

export default function Clientes() {
  return (
    <> 
      <main>
        <section className='flex flex-col items-center gap-4 px-7 '>
          <h1 className='text-2xl'>Clientes</h1>
        </section>
        <section className='w-full flex justify-center'>
          <ClienteList/>
        </section>
      </main>
    </>
  );
}
