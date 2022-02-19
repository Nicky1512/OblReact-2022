import "./Dashboard.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Envios from "./Envios";
import Stats from '../Dashboard/Stats/Stats'
import Calculadora from './Calculadora'
import Header from "../Header/Header";
import { getEnvios, getCategorias, getCiudades, getDeptos } from "../../services/serviceApi";
import { onLoadEnvios, onGetCategorias, onGetCiudades, onGetDeptos } from "../../containers/App/actions";



const Dashboard = () => {
  const userLogged = useSelector((state) => state.userLogged);
 // const envios = useSelector((state) => state.envios);
 // const categorias = useSelector((state) => state.categorias);
  const dispatch = useDispatch();



  //Carga envíos
  useEffect(() => {
    (async () => {
      try {
        const enviosResponse = await getEnvios(userLogged);
        if (enviosResponse.codigo === 200) {  
      
          let sum = 0;
          enviosResponse.envios.forEach(function(envio){
            sum += envio.precio;
           });
          const payload = {
            envios: enviosResponse.envios,
            gastoTotal:  sum

          }
        
          dispatch(onLoadEnvios(payload));
          //dispatch(onLoadEnvios(enviosResponse.envios));
        }else{
          console.log(enviosResponse.codigo);
        }
      } catch (error) {
        console.log(error.message);
      }
    })();
  }, []);


  //Carga categorias
  useEffect(() => {
    (async () => {
      try {
        const catResponse = await getCategorias(userLogged);
        if (catResponse.codigo === 200) {
          dispatch(onGetCategorias(catResponse.categorias));
        }else{
          console.log(catResponse.codigo);
        }
      } catch (error) {
        console.log(error.message);
      }
    })();
  }, []);

  //Carga ciudades
  useEffect(() => {
    (async () => {
      try {
        const ciudadesResponse = await getCiudades(userLogged);
        
        if (ciudadesResponse.codigo === 200) {
          dispatch(onGetCiudades(ciudadesResponse.ciudades));
          console.log(ciudadesResponse.ciudades)
         
        }else{
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
          console.log(response.departamentos)
        }else{
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
        <div className="container-fluid">
          <Stats/>
          <Envios />
 
        </div>
      }
      {/* <div className="container">
        <Calculadora />
      </div> */}
      {/*<div className="container-fluid">
        <Stats />
    </div>*/}
    </>
  );
};

export default Dashboard;
