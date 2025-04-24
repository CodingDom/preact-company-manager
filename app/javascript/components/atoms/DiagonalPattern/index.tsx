import { FunctionalComponent } from "preact";

export enum DiagonalPatternUnits {
  UserSpaceOnUse = "userSpaceOnUse",
  ObjectBoundingBox = "objectBoundingBox",
}

export interface DiagonalPatternProps {
  id: string;
  patternUnits?: DiagonalPatternUnits;
  rotation?: number;
  width?: number;
  height?: number;
  strokeWidth?: number;
}

export const DiagonalPattern: FunctionalComponent<DiagonalPatternProps> = ({
  id,
  patternUnits = DiagonalPatternUnits.UserSpaceOnUse,
  rotation = 0,
  width = 6,
  height = 1,
  strokeWidth = 1,
}) => (
  <defs>
    <pattern
      id={id}
      patternUnits={patternUnits}
      width={width}
      height={height}
      patternTransform={`rotate(${rotation})`}
    >
      <line
        x1="0"
        y1="0"
        x2="0"
        y2="1"
        stroke="rgba(255, 255, 255, 0.3)"
        stroke-width={strokeWidth}
      />
    </pattern>
  </defs>
);
