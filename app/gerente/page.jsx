'use client'
const cars = ['nome 1', 'nome 2', 'nome 3', 'nome 4'];

export default function Gerente() {
  return (
    <>
      <h1>Gerente</h1>
      <h2>Area do gerente</h2>
      {cars.map((e) => {
        return (
          <>
            <span>{e}</span> <br />
          </>
        )
      })}
    </>
  );
}
