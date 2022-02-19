import { useEffect, useState } from "react";
/* import Chart from "react-apexcharts"; */

const Graph = () => {
  /*   const [data, setData] = useState({
    series: [
      {
        data: [completed, incomplete],
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
        categories: ["Completed", "Incomplete"],
      },
    },
  }); */

  /*   useEffect(() => {
    setData({
      ...data,
      series: [
        {
          data: [completed, incomplete],
        },
      ],
    });
  }, [completed, incomplete]); */

  return (
    <div className="border p-3">
      <h3>Graph</h3>
      {/* <Chart
        options={data.options}
        series={data.series}
        type="bar"
        height={350}
      /> */}
    </div>
  );
};

export default Graph;
