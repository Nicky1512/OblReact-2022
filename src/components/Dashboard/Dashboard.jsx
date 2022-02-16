import "./Dashboard.css";
import Calculadora from "../Dashboard/Calculadora/Calculadora";
import Stats from "../Dashboard/Stats/Stats";
import Envios from "./Envios";
import Gastos from "./Gastos/Gastos";
import Header from "../Header/Header";

const Dashboard = () => {
  return (
    <>
      <Header />
      {/* <div className="container-fluid">
        <Envios />
        <Gastos />
      </div> */}
      {/* <div className="container">
        <Calculadora />
      </div> */}
      <div className="container-fluid">
        <Stats />
      </div>
    </>
  );
};

export default Dashboard;
