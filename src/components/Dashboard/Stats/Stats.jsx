import Graph from "./Graph/Graph";
import RankingTable from "./RankingTable/RankingTable";
import { useSelector } from "react-redux";
import Header from "../../Header/Header";
import NoContentDiv from "../NoContentDiv//NoContent";
import { useEffect } from "react";

const Stats = () => {
  const ciudades = useSelector((state) => state.ciudades);
  const deptos = useSelector((state) => state.deptos);
  const envios = useSelector((state) => state.envios);
  const categorias = useSelector((state) => state.categorias);

  useEffect(() => {});

  const enviosCiudad = ciudades
    .map((ciudad) => {
      const cantEnvios = envios.filter(
        (envio) => envio.ciudad_destino === ciudad.id
      ).length;
      return {
        ciudad: ciudad,
        id_depto: ciudad.id_departamento,
        cantEnvios: cantEnvios,
      };
    })
    .filter((obj) => obj.cantEnvios > 0);

  const enviosXDepartamento = () => {
    const enviosCiudadList = enviosCiudad;
    // console.log("Envios x Ciudad", enviosCiudadList);

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
    //console.log("Envios x departamento", enviosxDeptoList);

    //ordeno la lista por totalEnvios y despues me quedo con los 5 primeros
    return enviosxDeptoList
      .sort((a, b) => (a.totalEnvios < b.totalEnvios ? 1 : -1))
      .slice(0, 5);
  };

  const enviosCategoria =
    categorias.length > 0
      ? categorias
          .map((categoria) => {
            const cantEnvios = envios.filter(
              (envio) => envio.id_categoria === categoria.id
            ).length;
            return {
              categoria: categoria.nombre,
              cantEnvios: cantEnvios,
            };
          })
          .filter((obj) => obj.cantEnvios > 0)
      : [];

  const enviosDepto = enviosXDepartamento();


  const ciudadesEnvios = enviosCiudad.map((e) => {
    return e.ciudad.nombre;
  });
  const categoriasEnvios = enviosCategoria.map((e) => {
    return e.categoria;
  });
  const cantidadEnviosCiudades = enviosCiudad.map((e) => {
    return e.cantEnvios;
  });
  const cantidadEnviosCategorias = enviosCategoria.map((e) => {
    return e.cantEnvios;
  });

  return (
    <>
      <Header />
      <div className="container-fluid">
        <div className="container-fluid p-3 border bg-light mb-5">
          <h1 className="text-center">
            Ranking de los departamentos con mas envios
          </h1>
          <div className="">
            {enviosDepto && enviosDepto.length > 0 ? (
              <RankingTable datos={enviosDepto} />
            ) : (
              <NoContentDiv />
            )}
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="p-3 border bg-light">
          <h1 className="text-center">Graphs</h1>
          <div className="container-fluid">
            {categoriasEnvios && categoriasEnvios.length > 0 ? (
              <Graph
                className="graph_item"
                title={"Envios por categoria"}
                data={cantidadEnviosCategorias}
                categories={categoriasEnvios}
              />
            ) : (
              <NoContentDiv />
            )}
            {ciudadesEnvios && ciudadesEnvios.length > 0 ? (
              <Graph
                className="graph_item"
                title={"Envios por ciudad"}
                data={cantidadEnviosCiudades}
                categories={ciudadesEnvios}
              />
            ) : (
              <NoContentDiv />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Stats;
