import { FunctionalComponent } from "preact";

export interface DiagonalPatternProps {
  id: string;
}

export const DiagonalPattern: FunctionalComponent<DiagonalPatternProps> = ({
  id,
}) => (
  <defs>
    <pattern id={id} patternUnits="userSpaceOnUse" width="12" height="12">
      <path
        d="M0,0 l12,12"
        stroke="rgba(255, 255, 255, 0.3)"
        stroke-width="1"
      />
    </pattern>
  </defs>
);
