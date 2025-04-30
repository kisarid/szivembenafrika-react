import "./i18n";
import "./main.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "swiper/css";
import { router } from "./router.tsx";
import { RouterProvider } from "react-router-dom";
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
