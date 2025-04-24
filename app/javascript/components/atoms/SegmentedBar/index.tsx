import { FunctionalComponent } from "preact";
import { DiagonalPattern } from "../DiagonalPattern";

export enum SegmentedBarCornerRadius {
  Default = 0,
  Curved = 12,
}

export interface SegmentedBarFill {
  value: number;
  color: string;
}

export interface SegmentedBarProps {
  cornerRadius?: SegmentedBarCornerRadius;
  fills: SegmentedBarFill[];
  showBackground?: boolean;
}

export const SegmentedBar: FunctionalComponent<SegmentedBarProps> = ({
  cornerRadius = SegmentedBarCornerRadius.Default,
  fills = [],
  showBackground,
}) => {
  let lastPercentage = 0;
  const patternId = `diagonal-pattern-${crypto.randomUUID()}`;

  return (
    <svg width="100%" height="20">
      <DiagonalPattern id={patternId} />

      {showBackground && (
        <rect
          width="100%"
          height="100%"
          rx={cornerRadius}
          ry={cornerRadius}
          fill="lightgray"
        />
      )}
      {fills.map(({ value, color }, index) => {
        let widthPadding = 1;
        let xPadding = 0.5;
        lastPercentage += value;

        if (index === 0) {
          xPadding = 0;
        } else if (fills.length === index + 1) {
          xPadding += xPadding;
        }

        return (
          <g>
            <rect
              width={value - widthPadding + "%"}
              x={lastPercentage - value + xPadding + "%"}
              height="100%"
              rx={cornerRadius}
              ry={cornerRadius}
              fill={color}
            />
            <rect
              width={value - widthPadding + "%"}
              x={lastPercentage - value + xPadding + "%"}
              height="100%"
              rx={cornerRadius}
              ry={cornerRadius}
              fill={`url(#${patternId})`}
            />
          </g>
        );
      })}
    </svg>
  );
};
