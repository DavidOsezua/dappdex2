// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import HomePage from "./pages/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import WalletPage from "./pages/walletPage";
import { useWeb3Modal } from '@web3modal/wagmi/react'

const App = () => {
  const {open} = useWeb3Modal()
  
  useEffect(() => {
    open()
  }, [])
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/wallet" element={<WalletPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
