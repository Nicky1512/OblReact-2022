import { useSelector } from "react-redux";

const Gastos = () => {

    const gastoTotal = useSelector((state) => state.gasto);
    console.log(gastoTotal);
    

    return (
        <div> 
            <h1 className="text-center">Gastos</h1>
            <h2>$ {gastoTotal}</h2>
        </div>
    )

}

export default Gastos;