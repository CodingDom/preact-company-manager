import { SegmentedBarCornerRadius } from "../app/javascript/components/atoms/SegmentedBar";
import { SegmentedStatusBar } from "../app/javascript/components/molecules/SegmentedStatusBar";

export default {
  title: "Library/Molecules/Segmented Status Bar",
  component: SegmentedStatusBar,
  tags: ["autodocs"],
  argTypes: {
      cornerRadius: {
        options: SegmentedBarCornerRadius,
        control: { type: "radio" },
      }
    },
};

export const Default = {
  args: {    
    items: [
        {
            color: 'var(--color-primary)',
            label: 'Example 1',
            value: 30
        },
        {
            color: 'var(--color-success)',
            label: 'Example 2',
            value: 50
        },
        {
            color: 'var(--color-warning)',
            label: 'Example 3',
            value: 20
        }
    ],
    cornerRadius: SegmentedBarCornerRadius.Default,
    showBackground: false,
  },
};
