import { useEffect, useState } from "react";
import Chart from "react-apexcharts";


const Graph = (props) => {
   const [datos, setDatos] = useState({
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
          horizontal: true,
        },
      },
      dataLabels: {
        enabled: true,
      },
      xaxis: {
        categories: props.categories,
      },
    },
  }); 

  useEffect(() => {
    setDatos({
      ...datos,
      series: [
        {
          data: props.data,
          categories: props.categories,
        },
      ],
    });
  }, props.data, props.categories) ;


  return (
    <div className="border p-3 m-2 bg-white">
      <h2 className="mb-4">{props.title}</h2>
      {props.categories.length > 0 ? (
        <Chart
          options={datos.options}
          series={datos.series}
          type="bar"
          height={350}
        />
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
};

export default Graph;
