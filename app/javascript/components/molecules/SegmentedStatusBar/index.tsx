import { FunctionalComponent } from "preact";
import { Legend, LegendItem } from "../../atoms/Legend";
import {
  SegmentedBar,
  SegmentedBarCornerRadius,
  SegmentedBarFill,
} from "../../atoms/SegmentedBar";
import * as styles from "./SegmentedStatusBar.module.scss";

export interface SegmentedStatusBarItem {
  color: string;
  value: number;
  label: string;
}

export interface SegmentedStatusBarProps {
  items: SegmentedStatusBarItem[];
  cornerRadius?: SegmentedBarCornerRadius;
  showBackground?: boolean;
}

/**
 * UI component for visualizing statuses
 *
 * @param {object} props
 * @param {array} props.items
 * @param {string} [props.cornerRadius='default'] Default is `'default'`
 * @param {boolean} [props.showBackground=false] Default is `false`
 */
export const SegmentedStatusBar: FunctionalComponent<
  SegmentedStatusBarProps
> = ({
  items,
  cornerRadius = SegmentedBarCornerRadius.Default,
  showBackground,
}) => {
  const fills: SegmentedBarFill[] = [];
  const legendItems: LegendItem[] = [];

  items.forEach(({ color, value, label }) => {
    fills.push({
      color,
      value,
    });
    legendItems.push({ color, label });
  });

  return (
    <div className={styles["segmented-status-bar"]}>
      <SegmentedBar
        fills={fills}
        cornerRadius={cornerRadius}
        showBackground={showBackground}
      />
      <Legend items={legendItems} />
    </div>
  );
};
