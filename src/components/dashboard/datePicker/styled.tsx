import styled from "styled-components";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";

export const Container = styled.div`
  display: flex;

  .calender-box {
  }
`;

export const MyDatePicker = styled(DatePicker)`
  font-size: 14px;
  font-weight: 500;
  color: #3a474e;
  background-color: transparent;

  padding: 0;
  border: none;
  outline: none;
`;
