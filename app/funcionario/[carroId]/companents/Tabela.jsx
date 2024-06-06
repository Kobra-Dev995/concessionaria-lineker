export default function TabelaCarro() {
  return (
    <>
      <div className='overflow-scroll'>
        <table className='sira-table success'>
          {/* <thead>
            <tr>
              <th>Type</th>
              <th>
                <div className='flex items-center gap-2'>
                  
                  <p>Left Icon</p>
                </div>
              </th>
              <th>Description</th>
              <th>Amount</th>
            </tr>
          </thead> */}

          <tbody>
            <tr>
              <th>Ano</th>
              <td></td>
              <th>Procedência</th>
              <td></td>
            </tr>
            <tr>
              <th>Garantia</th>
              <td></td>
              <th>Portas</th>
              <td></td>
            </tr>
            <tr>
              <th>Plataforma</th>
              <td></td>
              <th>Geração</th>
              <td></td>
            </tr>
            <tr>
              <th>Propulção</th>
              <td></td>
              <th>Combustível</th>
              <td></td>
            </tr>
            <tr>
              <th>Porte</th>
              <td></td>
              <th>Configuração</th>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
