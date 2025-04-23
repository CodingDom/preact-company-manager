import { FunctionalComponent } from "preact";
import { JSX } from "preact/jsx-runtime";
import * as styles from "./Card.module.scss";

export interface CardProps {
  children: JSX.Element | JSX.Element[];
}

export const Card: FunctionalComponent<CardProps> = ({ children }) => {
  return <div className={styles.card}>{children}</div>;
};
