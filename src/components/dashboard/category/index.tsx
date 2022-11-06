import styled from "styled-components";
import { useRecoilState } from "recoil";
import { firstFilterState } from "@/lib/recoil/state";

const Category = () => {
  const [firstFilter, setFirstFilter] = useRecoilState(firstFilterState);

  return (
    <Container>
      <LeftContainer>
        <Selection>
          <svg
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="5" cy="5" r="5" fill="#4FADF7" />
          </svg>
          <select
            value={firstFilter}
            onChange={(e) => setFirstFilter(e.target.value)}
          >
            <option value="ROAS">ROAS</option>
            <option value="">광고비</option>
            <option value="">노출수</option>
            <option value="">클릭수</option>
            <option value="">전환 수</option>
            <option value="">매출</option>
          </select>
        </Selection>
        <Selection>
          <svg
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="5" cy="5" r="5" fill="#85DA47" />
          </svg>
          <select name="" id="">
            <option value="ROAS">ROAS</option>
            <option value="">광고비</option>
            <option value="">노출수</option>
            <option value="">클릭수</option>
            <option value="">전환 수</option>
            <option value="">매출</option>
          </select>
        </Selection>
      </LeftContainer>
      <RithgContainer>
        <select name="" id="">
          <option value="ROAS">주간</option>
          <option value="">일/별</option>
        </select>
      </RithgContainer>
    </Container>
  );
};

export default Category;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px 0;
`;
const LeftContainer = styled.div`
  display: flex;
  gap: 10px;
`;
const RithgContainer = styled.div`
  select {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;

    /* grey_800 */

    color: #3a474e;
  }
`;
const Selection = styled.div`
  display: flex;
  align-items: center;
  background: #ffffff;
  /* grey_100 */

  border: 1px solid #d1d8dc;
  border-radius: 10px;
  padding: 12px 16px;
  gap: 10px;

  select {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;

    /* grey_800 */

    color: #3a474e;
  }
`;
