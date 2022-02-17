import "./Dashboard.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Calculadora from "../Dashboard/Calculadora/Calculadora";
import Stats from "../Dashboard/Stats/Stats";
import Envios from "./Envios";
import Gastos from "./Gastos/Gastos";
import Header from "../Header/Header";
import { getEnvios } from "../../services/serviceApi";
import { onLoadEnvios } from "../../containers/App/actions";

const Dashboard = () => {
  const userLogged = useSelector((state) => state.userLogged);
  const envios = useSelector((state) => state.envios);
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

  return (
    <>
      <Header />
      {
        <div className="container-fluid">
          <Envios envios={envios} />
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
