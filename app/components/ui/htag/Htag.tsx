import { FC } from "react";
import React from "react";
import styles from "./Htag.module.css";
import { HtagProps } from "./Htag.props";

export const Htag = ({
  tag,
  children,
  ...props
}: HtagProps): JSX.Element => {
  return (
    <>
      {tag === "h1" && <h1 className={styles['h1']}>{children}</h1>}
      {tag === "h2" && <h2 className={styles['h2']}>{children}</h2>}
      {tag === "h3" && <h3 className={styles['h3']}>{children}</h3>}
    </>
  );
};
