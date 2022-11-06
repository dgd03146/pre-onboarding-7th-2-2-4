import styled from "styled-components";

const HeaderBar = () => {
  return (
    <Container>
      <div>
        <p>원티드님</p>
      </div>
    </Container>
  );
};

export default HeaderBar;

const Container = styled.div`
  padding: 20px 40px;
  div {
    text-align: right;
    p {
      font-family: "Roboto";
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 16px;

      /* grey_800 */

      color: #3a474e;
    }
  }
`;
