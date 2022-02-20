const RankingTable = (props) => {
  //console.log("Props table", props.datos)
  return (
    <>
      {props.datos.length > 0 ? (
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Departamento</th>
              <th scope="col">Cantidad envios</th>
            </tr>
          </thead>
          <tbody>
            {props.datos.map((envio, index) => ( 
              <tr key={envio.id}>
                <td>{index+1}</td>
                <td>{envio.depto.nombre}</td>
                <td>{envio.totalEnvios}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : ( 
        <p>Cargando...</p>
      )}
    </>
  );
};

export default RankingTable;
