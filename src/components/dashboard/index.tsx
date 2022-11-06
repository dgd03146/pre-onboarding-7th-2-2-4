import styled from "styled-components";
import Card from "../layout/chartCard";
import Chart from "./chart";
import Category from "./category";
import useChart from "@/lib/hooks/useChart";

// TODO: 이름 정리하기
const DashBoardChart = () => {
  const { week } = useChart();
  return (
    <Container>
      <Title>
        <p>통합 광고 현황</p>
      </Title>
      <ChartContainer>
        <ChartInfo>
          {week.map((it) => (
            <Card key={it.title} title={it.title} content={it.content} />
          ))}
        </ChartInfo>
        <Category />
        <Chart />
      </ChartContainer>
    </Container>
  );
};

export default DashBoardChart;

const Container = styled.div`
  padding: 20px 0;
`;

const Title = styled.div`
  p {
    text-align: left;
    /* head_16 */

    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    /* identical to box height */

    /* grey_800 */

    color: #3a474e;
    margin-bottom: 20px;
  }
`;

const ChartContainer = styled.div`
  background: #ffffff;
  /* shadow_banner */

  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  border-radius: 20px;
  padding: 40px;
`;

const ChartInfo = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 22px;
`;
