import { FunctionalComponent } from "preact";
import { JSX } from "preact/jsx-runtime";
import * as styles from "./Card-Row.module.scss";

export interface CardRowProps {
  children: JSX.Element | JSX.Element[];
}

export const CardRow: FunctionalComponent<CardRowProps> = ({ children }) => {
  return <div className={styles["card-row"]}>{children}</div>;
};
