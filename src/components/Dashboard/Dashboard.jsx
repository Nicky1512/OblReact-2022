import "./Dashboard.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onUserLogout } from '../../containers/App/actions'
import Envios from "./Envios";
import Header from "../Header/Header";
import {
  getEnvios,
  getCategorias,
  getCiudades,
  getDeptos,
} from "../../services/serviceApi";
import {
  onLoadEnvios,
  onGetCategorias,
  onGetCiudades,
  onGetDeptos,
} from "../../containers/App/actions";

const Dashboard = () => {
  const userLogged = useSelector((state) => state.userLogged);
  const dispatch = useDispatch();

  //Carga envíos
  useEffect(() => {
    (async () => {
      try {
        const enviosResponse = await getEnvios(userLogged);
        if (enviosResponse.codigo === 200) {
          let sum = 0;
          enviosResponse.envios.forEach(function (envio) {
            sum += envio.precio;
          });
          const payload = {
            envios: enviosResponse.envios,
            gastoTotal: sum,
          };
          dispatch(onLoadEnvios(payload));
          //dispatch(onLoadEnvios(enviosResponse.envios));
        } else {
          if (enviosResponse.codigo === 401) {
            localStorage.removeItem("loggedUser");
            dispatch(onUserLogout());
          }
          console.log(enviosResponse.codigo);
          alert("Hay un problema con el servidor.")
        }
      } catch (error) {
        console.log(error.message);
      }
    })();
  }, [dispatch, userLogged]);

  //Carga categorias
  useEffect(() => {
    (async () => {
      try {
        const catResponse = await getCategorias(userLogged);
        if (catResponse.codigo === 200) {
          dispatch(onGetCategorias(catResponse.categorias));
        } else {
          console.log(catResponse.codigo);
        }
      } catch (error) {
        console.log(error.message);
      }
    })();
  }, [dispatch, userLogged]);

  //Carga ciudades
  useEffect(() => {
    (async () => {
      try {
        const ciudadesResponse = await getCiudades(userLogged);

        if (ciudadesResponse.codigo === 200) {
          dispatch(onGetCiudades(ciudadesResponse.ciudades));
        } else {
          console.log(ciudadesResponse.codigo);
          //TODO: cod 401-cerrar sesion
        }
      } catch (error) {
        console.log(error.message);
      }
    })();
  }, []);

  //Carga deptos
  useEffect(() => {
    (async () => {
      try {
        const response = await getDeptos(userLogged);

        if (response.codigo === 200) {
          dispatch(onGetDeptos(response.departamentos));
        } else {
          console.log(response.codigo);
          //TODO: cod 401-cerrar sesion
        }
      } catch (error) {
        console.log(error.message);
      }
    })();
  }, []);

  return (
    <>
      <Header />
      {
        <div className="">
          <Envios />
        </div>
      }
    </>
  );
};

export default Dashboard;
