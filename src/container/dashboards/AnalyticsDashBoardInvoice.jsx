import React, { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";

function AnalyticsDashBoardInvoice({ data }) {
  const [chartData, setChartData] = useState({
    series: [
      { type: "line", name: "Net Proceeds", data: [] },
      { type: "line", name: "Total Cost", data: [] },
      { type: "line", name: "Net Profit", data: [] },
      { type: "line", name: "Quantity Ordered", data: [] },
    ],
    options: {
      chart: {
        height: 450,
        animations: { speed: 500 },
        dropShadow: {
          enabled: true,
          top: 8,
          blur: 3,
          color: "#000",
          opacity: 0.1,
        },
        toolbar: { show: false },
        events: {
          mounted: (chart) => {
            chart.windowResizeHandler();
          },
        },
      },
      colors: [
        "rgb(132, 90, 223)",
        "rgba(35, 183, 229, 0.85)",
        "rgba(0, 255, 0, 0.85)",
        "rgba(250, 231, 4)",
      ],
      dataLabels: { enabled: false },
      grid: { borderColor: "#f1f1f1", strokeDashArray: 3 },
      stroke: { curve: "smooth", width: [2, 2, 2, 0], dashArray: [0, 5, 0, 0] },
      xaxis: { type: "category", categories: [], axisTicks: { show: false } },
      yaxis: {
        labels: {
          formatter: (value) => "$" + value,
        },
      },
      tooltip: {
        y: [
          { formatter: (e) => (e !== undefined ? "$" + e.toFixed(0) : e) },
          { formatter: (e) => (e !== undefined ? "$" + e.toFixed(0) : e) },
          { formatter: (e) => (e !== undefined ? "$" + e.toFixed(0) : e) },
          { formatter: (e) => (e !== undefined ? e.toFixed(0) : e) },
        ],
      },
      legend: {
        show: true,
        customLegendItems: [
          "Net Proceeds",
          "Total Cost",
          "Net Profit",
          "Quantity Ordered",
        ],
        inverseOrder: true,
      },
      title: {
        align: "left",
        style: {
          fontSize: ".8125rem",
          fontWeight: "semibold",
          color: "#8c9097",
        },
      },
      markers: { hover: { sizeOffset: 5 } },
    },
  });

  useEffect(() => {
    if (data.length) {
      const netProceedsData = [];
      const totalCostData = [];
      const netProfitData = [];
      const qtyOrderedData = [];
      const categories = [];

      data.forEach((item) => {
        netProceedsData.push(item.net_proceeds);
        totalCostData.push(item.total_cost);
        netProfitData.push(item.net_profit);
        qtyOrderedData.push(item.qty_ordered);
        categories.push(item.posted_date);
      });
      setChartData((prevState) => ({
        ...prevState,
        series: [
          { ...prevState.series[0], data: netProceedsData },
          { ...prevState.series[1], data: totalCostData },
          { ...prevState.series[2], data: netProfitData },
          { ...prevState.series[3], data: qtyOrderedData },
        ],
        options: {
          ...prevState.options,
          xaxis: { ...prevState.options.xaxis, categories },
        },
      }));
    }
  }, [data]);

  return (
    <div>
      <ReactApexChart
        options={chartData.options}
        series={chartData.series}
        type="line"
        height={250}
      />
    </div>
  );
}

export default AnalyticsDashBoardInvoice;
