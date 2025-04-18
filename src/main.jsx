import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import MainRouter from "./MainRouter";
import { Provider } from "react-redux";
import { store } from "./store";
import { ToastContainer } from "react-toastify";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <ToastContainer />
      <MainRouter />
    </Provider>
  </StrictMode>
);
