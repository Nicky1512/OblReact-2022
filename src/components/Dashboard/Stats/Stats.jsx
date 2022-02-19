import Graph from "./Graph/Graph";
import RankingTable from "./RankingTable/RankingTable";
import { useSelector } from "react-redux";

const Stats = () => {
  const ciudades = useSelector((state) => state.ciudades);
  const deptos = useSelector((state) => state.deptos);
  const envios = useSelector((state) => state.envios);

  const enviosXCiudad = () => {
    const enviosCiudadList = [];

    ciudades.forEach((ciudad) => {
      const cantEnvios = envios.filter(
        (envio) => envio.ciudad_destino === ciudad.id).length; //hace un array por cada ciudad con todos sus envios. .length para obteener el total
      if (cantEnvios > 0) {
        const envioCiudad_Element = { 
          ciudad: ciudad,
          id_depto: ciudad.id_departamento,
          cantEnvios: cantEnvios,
        };
        enviosCiudadList.push(envioCiudad_Element);
      }
    });
    return enviosCiudadList;
  };


  const enviosXDepartamento = () => {
    const enviosCiudadList = enviosXCiudad();
    console.log("Envios x Ciudad", enviosCiudadList);

    const totalEnviosDepto = (deptoId) =>
      enviosCiudadList
        .filter((i) => i.id_depto === deptoId)
        .reduce((prev, next) => prev + next.cantEnvios, 0);

    const enviosxDeptoList = [];

    deptos.forEach((d) => {
      const totalEnvios = totalEnviosDepto(d.id);
      if (totalEnvios > 0) {
        const envioDepto_Element = {
          depto: d,
          totalEnvios: totalEnvios,
        };
        enviosxDeptoList.push(envioDepto_Element);
      }
    });
    console.log("Envios x departamento", enviosxDeptoList);
    return enviosxDeptoList;
  };

  enviosXDepartamento();

  return (
    <>
      <RankingTable />
      <div>
        <h1>Graphs</h1>
        <div className="container">
          <Graph />
          <Graph />
        </div>
      </div>
    </>
  );
};

export default Stats;
