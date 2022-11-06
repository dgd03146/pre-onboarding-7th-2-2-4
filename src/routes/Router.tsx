import { Route, Routes } from "react-router-dom";
import DashBoard from "@/pages/dashBoard";
import Layout from "@/components/layout";

const Router = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<DashBoard />} />
      </Route>
    </Routes>
  );
};

export default Router;
