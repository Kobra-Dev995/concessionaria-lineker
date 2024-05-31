export default function Carro({params}) {
  //   const { query } = useRouter();
  return (
    <>
      <h1>{params.carroId.replace('%20', ' ')}</h1>
    </>
  );
}
