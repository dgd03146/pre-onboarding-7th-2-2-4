import { useRecoilValue } from "recoil";
import { firstFilterState, startState } from "@/lib/recoil/state";
import { chartCategoryDate, weekChart } from "../utils/chart";

interface dataPros {
  imp: number;
  click: number;
  cost: number;
  conv: number;
  convValue: number;
  ctr: number;
  cvr: number;
  cpc: number;
  cpa: number;
  roas: number;
  date: string;
}

// TODO: filter 첫번째랑 두번째 다른거
// const getFirstFilterData = (filter: string, dayData: dataPros[]) => {
//   dayData.map((it) => {});

//   // switch (filter) {
//   //   case "ROAS":

//   // }
// };

const useChart = () => {
  const startDate = useRecoilValue(startState);
  const categories = chartCategoryDate(startDate);
  // const firstFilter = useRecoilValue(firstFilterState);

  const { week, dayData } = weekChart(startDate);

  const series = [
    {
      name: "Desktops",
      data: [10, 41, 35, 51, 49, 62, 69]
    },
    {
      name: "Data2",
      data: [1, 100, 15, 41, 69, 32, 39]
    }
  ];

  const options = {
    series: [
      {
        name: "Desktops",
        data: [10, 41, 35, 51, 49, 62, 69]
      }
    ],
    chart: {
      height: 350,
      type: "line",
      zoom: {
        enabled: false
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: "straight"
    },

    grid: {
      row: {
        colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
        opacity: 0.5
      }
    },
    xaxis: {
      categories
    }
  };

  return { series, options, week, dayData };
};

export default useChart;
