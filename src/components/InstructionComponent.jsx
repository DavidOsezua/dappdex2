import React from "react";
import styles from "./InstructionComponent.module.css";
import { instructionData } from "../data/data";
import InstructionCard from "./InstructionCard";

const InstructionComponent = () => {
  return (
    <section className={`${styles.instructionSection}`}>
      <div className={`${styles.container}`}>
        <h2 className={`${styles.instructionTitle}`}>How to connect wallet</h2>
        <div className={`${styles.cardContainer}`}>
          {instructionData.map((instruction) => (
            <InstructionCard
              key={instruction.title}
              instruction={instruction}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstructionComponent;
