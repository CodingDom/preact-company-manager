import { arc } from "d3-shape";
import { scaleLinear } from "d3-scale";
import { FunctionalComponent } from "preact";
import { DiagonalPattern } from "../DiagonalPattern";

export enum SegmentedGaugeCornerRadius {
  Default = "0",
  Curved = "12",
}

export interface SegmentedGaugeFill {
  value: number;
  color: string;
}

export interface SegmentedGaugeProps {
  cornerRadius?: SegmentedGaugeCornerRadius;
  fills: SegmentedGaugeFill[];
  heading?: string;
  min?: number;
  max?: number;
  showBackground?: boolean;
  subheading?: string;
}

export const SegmentedGauge: FunctionalComponent<SegmentedGaugeProps> = ({
  fills = [],
  min = 0,
  max = 100,
  showBackground = false,
  cornerRadius = SegmentedGaugeCornerRadius.Default,
}) => {
  const parsedRadius = parseFloat(cornerRadius);
  const backgroundArc =
    showBackground &&
    arc().cornerRadius(parsedRadius)({
      innerRadius: 0.8,
      outerRadius: 1,
      startAngle: -Math.PI / 2,
      endAngle: Math.PI / 2,
    });
  const percentScale = scaleLinear().domain([min, max]).range([0, 1]);

  let lastAngle = 0;

  const filledArcs = fills.map(({ value, color }, index) => {
    const percent = percentScale(value);

    const angleScale = scaleLinear()
      .domain([0, 1])
      .range([-Math.PI / 2, Math.PI / 2])
      .clamp(true);

    const startAngle = angleScale(lastAngle);
    lastAngle += percent;
    const padding =
      fills.length > index + 1 ? percentScale(2) : percentScale(0);
    const endAngle = angleScale(lastAngle - padding);

    return {
      path:
        arc().cornerRadius(parsedRadius)({
          innerRadius: 0.8,
          outerRadius: 1,
          startAngle,
          endAngle,
        }) || "",
      color,
    };
  });

  const patternId = `diagonal-pattern-${crypto.randomUUID()}`;

  return (
    <div>
      <svg
        style={{ overflow: "visible" }}
        width="13rem"
        viewBox={[-1, -1, 2, 1].join(" ")}
      >
        <DiagonalPattern
          id={patternId}
          strokeWidth={0.01}
          height={0.1}
          width={0.1}
          rotation={-35}
        />
        {backgroundArc && <path d={backgroundArc} fill="#dbdbe7" />}
        {filledArcs.map(({ path, color }) => (
          <g>
            <path d={path} fill={color} />
            <path d={path} fill={`url(#${patternId})`} />
          </g>
        ))}
      </svg>
    </div>
  );
};
