import { useEffect, useState } from "react";
import Chart from "react-apexcharts";

const Graph = (props) => {
  /* const [data, setData] = useState({
    series: [
      {
        data: [parametro, contador],
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
        categories: [parametro, enviosTotales],
      },
    },
  }); */
  /* useEffect(() => {
    setData({
      ...data,
      series: [
        {
          data: [props.data, props.enviosTotales],
        },
      ],
    });
  }, [,]);
 */
  return (
    <div className="border p-3">
      <h3>Graph</h3>
      {/* {props.datos.length > 0 ? (
        <Chart
          options={data.options}
          series={data.series}
          type="bar"
          height={350}
        />
      ) : (
        <p>Cargando...</p>
      )} */}
    </div>
  );
};

export default Graph;
