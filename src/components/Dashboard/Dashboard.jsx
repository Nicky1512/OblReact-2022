import "./Dashboard.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Calculadora from "../Dashboard/Calculadora/Calculadora";
import Stats from "../Dashboard/Stats/Stats";
import Envios from "./Envios";
import Gastos from "./Gastos/Gastos";
import Header from "../Header/Header";
import { getEnvios, getCategorias } from "../../services/serviceApi";
import { onLoadEnvios, onGetCategorias } from "../../containers/App/actions";



const Dashboard = () => {
  const userLogged = useSelector((state) => state.userLogged);
  const envios = useSelector((state) => state.envios);
  const categorias = useSelector((state) => state.categorias);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      try {
        const enviosResponse = await getEnvios(userLogged);
        if (enviosResponse.codigo === 200) {
          dispatch(onLoadEnvios(enviosResponse.envios));
        }else{
          console.log(enviosResponse.codigo);
        }
      } catch (error) {
        console.log(error.message);
      }
    })();
  }, []);


  
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


  return (
    <>
      <Header />
      {
        <div className="container-fluid">
          <Envios />
          <Gastos />
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
