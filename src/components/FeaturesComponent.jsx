import React from "react";
import styles from "./FeaturesComponent.module.css";
import { featuresData } from "../data/data";
import CardFeatures from "./CardFeatures";

const FeaturesComponent = () => {
  return (
    <section className={`${styles.featuresSection}`}>
      <div className={`${styles.container}`}>
        <h1 className={`${styles.featuresTitle}`}>Features</h1>
        <div className={`${styles.cardContainer}`}>
          {featuresData.map((feature) => (
            <CardFeatures key={feature.text} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesComponent;
