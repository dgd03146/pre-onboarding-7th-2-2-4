import { Container } from "./styles";
import { Outlet } from "react-router-dom";
import HeaderBar from "./headerBar";
import SideBar from "./sideBar";
import styled from "styled-components";

const Layout = () => {
  return (
    <Container>
      <SideBar />
      <Content>
        <HeaderBar />
        <Outlet />
      </Content>
    </Container>
  );
};

export default Layout;

const Content = styled.div`
  width: 70%;
  padding: 0 40px;
  background-color: ${(props) => props.theme.color.bg_gray};
`;
