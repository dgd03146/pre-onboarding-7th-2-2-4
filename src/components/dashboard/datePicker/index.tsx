import { MyDatePicker, Container } from "./styled";
import { ko } from "date-fns/esm/locale";
import { useRecoilState } from "recoil";
import { endState, startState } from "@/lib/recoil/state";
import { dateToString } from "@/lib/utils/date";

const DatePicker = () => {
  const [startDate, setStartDate] = useRecoilState(startState);
  const [endDate, setEndDate] = useRecoilState(endState);

  // TODO: useCalback
  const endDay = new Date(
    startDate.getFullYear(),
    startDate.getMonth(),
    startDate.getDate() + 7
  );

  console.log(endDate.getDate() - startDate.getDate());

  return (
    <Container>
      <div className="calender-box">
        <MyDatePicker
          selected={startDate}
          dateFormat="yyyy-MM-dd"
          onChange={(date: Date) => {
            setStartDate(date);
            setEndDate(endDay);
          }}
          locale={ko}
          // maxDate={endDate}
        ></MyDatePicker>
      </div>
      <div>
        <p>{dateToString(endDay)}</p>
      </div>
    </Container>
  );
};

export default DatePicker;
