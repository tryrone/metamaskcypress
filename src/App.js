import { useEffect, useState } from "react";
import "./App.css";
import detectEthereumProvider from "@metamask/detect-provider";

function App() {
  const [address, setAddress] = useState("");

  async function connectToMetaMask() {
    try {
      const provider = await detectEthereumProvider();
      if (provider) {
        await provider.request({ method: "eth_requestAccounts" });
        setAddress(provider.selectedAddress);
      } else {
        console.log("MetaMask not found");
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    async function checkMetaMask() {
      const provider = await detectEthereumProvider();
      if (provider) {
        // Handle connection status changes
        provider.on("accountsChanged", () => {
          setAddress(provider.selectedAddress);
        });
      } else {
        console.log("MetaMask not found");
      }
    }
    checkMetaMask();
  }, []);
  return (
    <div className="App">
      {address ? (
        <p>Connected address: {address}</p>
      ) : (
        <button className="button-1" onClick={connectToMetaMask}>
          Connect MetaMask
        </button>
      )}
    </div>
  );
}

export default App;
