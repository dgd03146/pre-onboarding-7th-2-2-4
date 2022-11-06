import styled from "styled-components";

interface CardProps {
  title: string;
  content: string;
  icon?: boolean;
  compared?: string;
}

const Card = ({ title, content, icon }: CardProps) => {
  return (
    <Container>
      <TitleWrapper>
        <p>{title}</p>
      </TitleWrapper>
      <ContentWrapper>
        <p className="content">{content}</p>
        <div>
          {/* TODO: SVG 옮기기 */}
          {icon ? (
            <svg
              width="10"
              height="8"
              viewBox="0 0 10 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M5 8L1.20797e-06 8.74228e-07L10 0L5 8Z" fill="#85DA47" />
            </svg>
          ) : (
            <svg
              width="10"
              height="8"
              viewBox="0 0 10 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M5 0L10 8L0 8L5 0Z" fill="#EA3A4B" />
            </svg>
          )}
          {/* <p className="compared">{compared}</p> */}
        </div>
      </ContentWrapper>
    </Container>
  );
};

export default Card;

const Container = styled.div`
  padding: 18px 40px;
  background: #ffffff;
  /* grey_50 */

  border: 0.5px solid #edeff1;
  border-radius: 10px;
`;

const TitleWrapper = styled.div`
  text-align: left;
  p {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    /* identical to box height */

    /* grey_300 */

    color: #94a2ad;
  }
  margin-bottom: 10px;
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  p.content {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    /* identical to box height */

    /* grey_800 */

    color: #3a474e;
  }

  p.compared {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    /* identical to box height */

    text-align: right;

    /* grey_300 */

    color: #94a2ad;
  }
`;
