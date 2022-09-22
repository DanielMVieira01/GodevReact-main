import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Content from "../src/components/Content";
import App from "./App";
import ContentDetails from "../src/components/ContentDetails";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="Content" element={<Content />} />
      </Route>
      <Route path="ContentDetails" element={<ContentDetails />}>
        <Route path=":Id" element={<ContentDetails />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
