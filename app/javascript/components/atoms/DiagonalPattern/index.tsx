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

/**
 * UI component for overlaying lines across an SVG
 *
 * @param {object} props
 * @param {string} props.id
 * @param {string} [props.patternUnits='userSpaceOnUse'] Default is `'userSpaceOnUse'`
 * @param {number} [props.rotation=0] Default is `0`
 * @param {number} [props.width=6] Default is `6`
 * @param {number} [props.height=1] Default is `1`
 * @param {number} [props.strokeWidth=1] Default is `1`
 */
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
