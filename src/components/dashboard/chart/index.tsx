import useChart from "@/lib/hooks/useChart";
import ApexCharts from "react-apexcharts";
import styled from "styled-components";

const Chart = () => {
  const { options, series } = useChart();
  return (
    <Container>
      <ApexCharts options={options} series={series} type="line" />
    </Container>
  );
};

export default Chart;

const Container = styled.div``;
