import clsx from "clsx";
import { ComponentChildren, FunctionalComponent } from "preact";
import * as styles from "./Row.module.scss";

export interface RowProps {
  children: ComponentChildren;
  fluid?: boolean;
}

export const Row: FunctionalComponent<RowProps> = ({ children, fluid }) => {
  return (
    <div class={clsx(styles["row"], { [styles["row--fluid"]]: fluid })}>
      {children}
    </div>
  );
};
