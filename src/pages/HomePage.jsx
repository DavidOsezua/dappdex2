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

const HomePage = () => {
  const [toggle, setToggle] = useState(false);
  const [modal, setModal] = useState(false);

  const modalHandler = () => {
    setModal(!modal);
  };

  const toggleHandler = () => {
    setToggle((prev) => !prev);
  };

  useEffect(() => {
    setModal(true);
  }, []);

  return (
    <>
      <Navbar toggleHandler={toggleHandler} />
      {modal && <Modal2 modalHandler={modalHandler} />}
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
