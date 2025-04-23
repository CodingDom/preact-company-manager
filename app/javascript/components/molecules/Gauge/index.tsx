import { arc } from "d3-shape";
import { scaleLinear } from "d3-scale";
import { FunctionalComponent } from "preact";

export enum GaugeCornerRadius {
  Default = 0,
  Curved = 12,
}

export interface GaugeFill {
  value: number;
  color: string;
}

export interface GaugeProps {
  cornerRadius?: GaugeCornerRadius;
  fills: GaugeFill[];
  min: number;
  max: number;
  showBackground?: boolean;
}

export const Gauge: FunctionalComponent<GaugeProps> = ({
  fills = [],
  min = 0,
  max = 100,
  showBackground = false,
  cornerRadius = GaugeCornerRadius.Default,
}) => {
  const backgroundArc =
    showBackground &&
    arc().cornerRadius(cornerRadius)({
      innerRadius: 0.65,
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
        arc().cornerRadius(cornerRadius)({
          innerRadius: 0.65,
          outerRadius: 1,
          startAngle,
          endAngle,
        }) || "",
      color,
    };
  });

  return (
    <div>
      <svg
        style={{ overflow: "visible" }}
        width="9em"
        viewBox={[-1, -1, 2, 1].join(" ")}
      >
        {backgroundArc && <path d={backgroundArc} fill="#dbdbe7" />}
        {filledArcs.map(({ path, color }) => (
          <path d={path} fill={color} />
        ))}
      </svg>
    </div>
  );
};
