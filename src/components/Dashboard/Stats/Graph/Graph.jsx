import { useEffect, useState } from "react";
import Chart from "react-apexcharts";

/* 0:
cantEnvios: 1
ciudad: {id: 129774, nombre: 'Aguas Corrientes', id_departamento: 3213, codigo_departamento: 'CA', id_pais: 235, …}
 */


const Graph = (props) => {
   const [data, setData] = useState({
    series: [
      {
        data: props.data
      },
    ],
    options: {
      chart: {
        type: "bar",
        height: 350,
      },
      plotOptions: {
        bar: {
          borderRadius: 4,
          horizontal: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        categories: props.categories,
      },
    },
  }); 

  return (
    <div className="border p-3">
      <h3>{props.title}</h3>
      {props.categories.length > 0 ? (
        <Chart
          options={data.options}
          series={data.series}
          type="bar"
          height={350}
        />
      ) : (
        <p>No hay datos</p>
      )}
    </div>
  );
};

export default Graph;
