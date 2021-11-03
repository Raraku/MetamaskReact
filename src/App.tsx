import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useWeb3React } from "@web3-react/core";
import { InjectedConnector } from "@web3-react/injected-connector";

export const injected = new InjectedConnector({
  supportedChainIds: [1, 3, 4, 5, 42],
});

function App() {
  const { active, account, library, connector, activate, deactivate } =
    useWeb3React();
  const data = useWeb3React();
  console.log(data);
  async function connect() {
    try {
      await activate(injected);
    } catch (ex) {
      console.log(ex);
    }
  }
  async function disconnect() {
    try {
      deactivate();
    } catch (ex) {
      console.log(ex);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <div className="flex flex-col items-center justify-center">
        <div>Metamask address</div>
        <button
          onClick={connect}
          className="py-2 mt-20 mb-4 text-lg font-bold text-white rounded-lg w-56 bg-blue-600 hover:bg-blue-800"
        >
          Connect to MetaMask
        </button>
        {active ? (
          <span>
            Connected with <b>{account}</b>
          </span>
        ) : (
          <span>Not connected</span>
        )}
        <button
          onClick={disconnect}
          className="py-2 mt-20 mb-4 text-lg font-bold text-white rounded-lg w-56 bg-blue-600 hover:bg-blue-800"
        >
          Disconnect
        </button>
      </div>
    </div>
  );
}

export default App;
