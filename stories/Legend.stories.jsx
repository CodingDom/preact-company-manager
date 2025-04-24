import { Legend, LegendOrientation } from "../app/javascript/components/atoms/Legend";

export default {
  title: "Library/Atoms/Legend",
  component: Legend,
  tags: ["autodocs"],
  argTypes: {
    type: {
      options: LegendOrientation,
      control: { type: "radio" },
    }
  },
};

export const Default = {
  args: {
    items: [
        {
            color: 'var(--color-primary)',
            label: 'Example 1'
        },
        {
            color: 'var(--color-success)',
            label: 'Example 2'
        },
        {
            color: 'var(--color-warning)',
            label: 'Example 3'
        }
    ],
    orientation: LegendOrientation.Horizontal,
  },
};
