import Bar from "@/components/dashboard/bar";
import DashBoardChart from "@/components/dashboard";
import styled from "styled-components";

const DashBoard = () => {
  return (
    <Container>
      <Bar />
      <DashBoardChart />
    </Container>
  );
};

export default DashBoard;

const Container = styled.div``;
