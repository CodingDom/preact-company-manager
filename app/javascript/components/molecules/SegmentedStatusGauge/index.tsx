import { FunctionalComponent } from "preact";
import { Legend, LegendItem, LegendOrientation } from "../../atoms/Legend";
import {
  SegmentedGauge,
  SegmentedGaugeCornerRadius,
  SegmentedGaugeFill,
} from "../../atoms/SegmentedGauge";
import * as styles from "./SegmentedStatusGauge.module.scss";

export interface SegmentedStatusGaugeItem {
  color: string;
  value: number;
  label: string;
}

export interface SegmentedStatusGaugeProps {
  items: SegmentedStatusGaugeItem[];
  cornerRadius?: SegmentedGaugeCornerRadius;
  showBackground?: boolean;
}

/**
 * UI component for visualizing statuses within a gauge view
 *
 * @param {object} props
 * @param {array} props.items
 * @param {string} [props.cornerRadius='default'] Default is `'default'`
 * @param {boolean} [props.showBackground=false] Default is `false`
 */
export const SegmentedStatusGauge: FunctionalComponent<
  SegmentedStatusGaugeProps
> = ({
  items,
  cornerRadius = SegmentedGaugeCornerRadius.Default,
  showBackground,
}) => {
  const fills: SegmentedGaugeFill[] = [];
  const legendItems: LegendItem[] = [];

  items.forEach(({ color, value, label }) => {
    fills.push({
      color,
      value,
    });
    legendItems.push({ color, label });
  });

  return (
    <div className={styles["segmented-status-gauge"]}>
      <div
        className={`${styles["segmented-status-gauge__col"]} col col-12 col-lg-6`}
      >
        <SegmentedGauge
          fills={fills}
          cornerRadius={cornerRadius}
          showBackground={showBackground}
        />
        <div className={styles["segmented-status-gauge__header"]}>
          <p className="lead-text">635</p>
          <p>Total Applied</p>
        </div>
      </div>
      <div
        className={`${styles["segmented-status-gauge__col"]} col col-12 col-lg-6`}
      >
        <Legend items={legendItems} orientation={LegendOrientation.Vertical} />
      </div>
    </div>
  );
};
