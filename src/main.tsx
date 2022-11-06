import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme, GlobalStyles } from "@/lib/styles";
import { RecoilRoot } from "recoil";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <RecoilRoot>
        <GlobalStyles />
        <App />
      </RecoilRoot>
    </ThemeProvider>
  </BrowserRouter>
);
