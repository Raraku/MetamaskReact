import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Web3ReactProvider } from "@web3-react/core";
import Web3 from "web3";

function getLibrary(provider: any) {
  return new Web3(provider);
}

function MyApp({ Component, pageProps }: { Component: any; pageProps: any }) {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Component {...pageProps} />
    </Web3ReactProvider>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <MyApp Component={App} pageProps={{}} />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
