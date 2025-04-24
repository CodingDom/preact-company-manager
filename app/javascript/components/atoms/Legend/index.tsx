import { FunctionalComponent } from "preact";
import * as styles from "./Legend.module.scss";
import clsx from "clsx";

export enum LegendOrientation {
  Horizontal = "horizontal",
  Vertical = "vertical",
}

export interface LegendItem {
  label: string;
  color: string;
}

export interface LegendProps {
  items: LegendItem[];
  orientation?: LegendOrientation;
}

/**
 * UI component for labeling graphics
 *
 * @param {object} props
 * @param {array} items
 * @param {string} [props.orientation='horizontal'] Default is 'horizontal'
 */
export const Legend: FunctionalComponent<LegendProps> = ({
  items,
  orientation = LegendOrientation.Horizontal,
}) => {
  if (!items.length) {
    return undefined;
  }

  return (
    <ul
      className={clsx(styles.legend, {
        [styles[`legend--${orientation}`]]: !!orientation,
      })}
    >
      {items.map(({ label, color }) => (
        <li>
          {renderBulletSVG(color)}
          {label}
        </li>
      ))}
    </ul>
  );
};

const renderBulletSVG = (fill: string) => (
  <svg height="10" width="10" viewBox="0 0 2 2">
    <circle cx="1" cy="1" r="1" fill={fill} />
  </svg>
);
