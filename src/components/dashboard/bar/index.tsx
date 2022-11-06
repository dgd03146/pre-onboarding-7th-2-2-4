import DatePicker from "@/components/dashboard/datePicker";
import styled from "styled-components";

const Bar = () => {
  return (
    <Container>
      <Title>
        <h2>대시보드</h2>
      </Title>
      <Date>
        <DatePicker />
      </Date>
    </Container>
  );
};

export default Bar;

const Container = styled.div`
  padding: 25px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const Title = styled.div`
  h2 {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 900;
    font-size: 26px;
    line-height: 30px;
    display: flex;
    align-items: center;
    color: #3a474e;
  }
`;

const Date = styled.div`
  p {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    text-align: right;

    /* grey_800 */

    color: #3a474e;
  }
`;
