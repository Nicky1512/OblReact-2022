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
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {props.datos.map((envio, index) => ( 
              <tr key={envio.id}>
                <th  scope="row">{index+1}</th>
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
