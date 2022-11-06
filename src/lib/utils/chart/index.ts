import { dateToString } from "../date";
import { report } from "../../../db/data.json";

export const chartCategoryDate = (startDate: Date) => {
  const date = dateToString(new Date(startDate));
  let today = Date.parse(date);
  const result = [];
  result.push(date);
  for (let i = 0; i < 6; i++) {
    today += 86400000;
    result.push(dateToString(new Date(today)));
  }
  return result;
};

const calcRoas = (
  roasSum: number,
  costSum: number,
  impSum: number,
  clickSum: number,
  convSum: number,
  convValueSum: number,
  dif: number
) => {
  const roas = Math.floor(roasSum / dif) + "%";
  const cost =
    Math.floor(costSum / dif)
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "만 원";

  const imp = Math.floor(impSum / dif) + "만 회";
  const click = Math.floor(clickSum / dif) + "만 회";
  const conv = Math.floor(convSum) + " 회";
  const convValue = Math.floor(convValueSum) + "억 원";

  return { roas, cost, imp, click, conv, convValue };
};

export const weekChart = (startDate: Date) => {
  const { daily } = report;
  const date = dateToString(new Date(startDate));

  let startIdx = daily.findIndex((it) => date === it.date);

  // FIXME: 동적으로 수정가능하게 함수에서 받기
  const dif = 7;
  const dayData = [];
  for (let i = 0; i < dif; i++) {
    dayData.push(daily[startIdx++]);
  }

  let roasSum = 0,
    costSum = 0,
    impSum = 0,
    clickSum = 0,
    convSum = 0,
    convValueSum = 0;
  for (const day of dayData) {
    roasSum += day.roas;
    costSum += day.cost;
    impSum += day.imp;
    clickSum += day.click;
    convSum += day.conv;
    convValueSum = day.convValue;
  }

  console.log(dayData, "dayData");

  const { roas, cost, imp, click, conv, convValue } = calcRoas(
    roasSum,
    costSum,
    impSum,
    clickSum,
    convSum,
    convValueSum,
    dif
  );

  const week = [
    { title: "Roas", content: roas },
    { title: "광고비", content: cost },
    { title: "노출 수", content: imp },
    { title: "클릭 수", content: click },
    { title: "전환 수", content: conv },
    { title: "매출", content: convValue }
  ];

  return { week, dayData };
};
