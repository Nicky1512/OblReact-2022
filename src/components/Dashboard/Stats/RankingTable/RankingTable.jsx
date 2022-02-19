import { useSelector } from "react-redux";


const RankingTable = () => {

  const ciudades = useSelector((state) => state.ciudades);
  const deptos = useSelector((state) => state.deptos);
  const envios = useSelector((state) => state.envios);

  const topDepartamentos = () =>{
/*       const enviosCiudad = envios.map((envio) => {
        ciudades.map(ciudad => {
          ciudad.id === envio.ciudad_destino
        })
 */


     
  }

    return (
      <div className="border p-3 mb-4">
        <h1>Ranking</h1>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Origen</th>
              <th scope="col">Destino</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Jacob</td>
              <td>Thornton</td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>Jacob</td>
              <td>Thornton</td>
            </tr>
            <tr>
              <th scope="row">5</th>
              <td>Jacob</td>
              <td>Thornton</td>
            </tr>
          </tbody>
        </table>
      </div>
    );

}

export default RankingTable;