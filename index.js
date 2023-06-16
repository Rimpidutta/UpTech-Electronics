import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ConfigProvider } from "antd";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ConfigProvider
      theme={{
        components : {
          Button : {
            colorPrimary : "#20B2AA",
            colorPrimaryHover : "#20B2AA",
            borderRadius : '0px',
            boxShadow: "none" ,
        }
      },
      token : {
        borderRadius : "2px",
        colorPrimary: "#20B2AA",
      }
    }}
    
    >
      <App />
    </ConfigProvider>
  </React.StrictMode>
);


reportWebVitals();
