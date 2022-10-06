import React from "react";
import styles from "./styles.module.scss";

interface Props {}

const LineBackground = ({}: Props) => {
    return (
        <div className={styles.lines}>
            <div className={styles.line}></div>
            <div className={styles.line}></div>
            <div className={styles.line}></div>
        </div>
    );
};

export default LineBackground;
