import Graph from "./Graph/Graph";
import RankingTable from "./RankingTable/RankingTable";
import { useSelector } from "react-redux";
import Header from "../../Header/Header";
import NoContentDiv from "../NoContentDiv//NoContent";

const Stats = () => {
  const ciudades = useSelector((state) => state.ciudades);
  const deptos = useSelector((state) => state.deptos);
  const envios = useSelector((state) => state.envios);
  const categorias = useSelector((state) => state.categorias);




  const enviosXCiudad = () => {
    const enviosCiudadList = [];

    ciudades.forEach((ciudad) => {
      const cantEnvios = envios.filter(
        (envio) => envio.ciudad_destino === ciudad.id
      ).length; //hace un array por cada ciudad con todos sus envios. .length para obteener el total
      if (cantEnvios > 0) {
        const envioCiudad_Element = {
          ciudad: ciudad,
          id_depto: ciudad.id_departamento,
          cantEnvios: cantEnvios,
        };
        enviosCiudadList.push(envioCiudad_Element);
      }
    });
   // console.log("EnviosCiudadList", enviosCiudadList);
    return enviosCiudadList;
  };

  const enviosXDepartamento = () => {
    const enviosCiudadList = enviosXCiudad();
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

  const enviosXCategoria = () => {
    const enviosCategoriaList = [];
    if (categorias.length > 0) {
      categorias.forEach((categoria) => {
        const cantEnvios = envios.filter(
          (envio) => envio.id_categoria === categoria.id
        ).length;
        if (cantEnvios > 0) {
          const envioCategoria_Element = {
            categoria: categoria.nombre,
            cantEnvios: cantEnvios,
          };
          enviosCategoriaList.push(envioCategoria_Element);
        }
      });
    }
    return enviosCategoriaList;
  };

  const enviosDepto = enviosXDepartamento();
  const enviosCiudad = enviosXCiudad();







  const enviosCategoria = enviosXCategoria();

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
          </div>
        </div>
      </div>
    </>
  );
};

export default Stats;
