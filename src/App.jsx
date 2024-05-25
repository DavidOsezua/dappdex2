// eslint-disable-next-line no-unused-vars
import React from "react";
import HomePage from "./pages/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import WalletPage from "./pages/walletPage";

const App = () => {
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
