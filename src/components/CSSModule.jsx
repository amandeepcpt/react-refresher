import React from "react";
import styles from "./style.module.less";

const CSSModule = () => {
  return (
    <>
      <div className={styles["container"]}>
        <div className={styles["sub-container"]}>
          <h2 className={styles["green-dark"]}>Aman</h2>
          <h2 className={styles["blue"]}>Sayed</h2>
        </div>

        <div className={styles.red}>Shivani</div>
      </div>
    </>
  );
};

export default CSSModule;
