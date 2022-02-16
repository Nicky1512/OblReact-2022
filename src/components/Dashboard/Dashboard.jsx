import "./Dashboard.css";
import Calculadora from "../Dashboard/Calculadora/Calculadora";
import Stats from "../Dashboard/Stats/Stats";
import EnviosList from "./EnviosList/EnviosList";
import EnviosForm from "./EnviosForm/EnviosForm";
import Gastos from "./Gastos/Gastos";
import Header from "../Header/Header";

const Dashboard = () => {
  return (
    <>
      <Header />
      <EnviosList />
      <EnviosForm />
      <Gastos />
      {/* <Calculadora /> */}
      {/* <Stats /> */}
    </>
  );
};

export default Dashboard;
