import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Layout";
import Create from "../components/create/Create";
import Display from "../components/display/Display";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
      <Route path="/" element={<Display />} />
      <Route path="/create-post" element={<Create/>} />
    </Route>
  )
);
