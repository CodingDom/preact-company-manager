import { h } from "preact";

import * as styles from "./Button.module.scss";

export enum ButtonTypes {
  Primary = "primary",
  Secondary = "secondary",
}

export enum ButtonSizes {
  Small = "small",
  Medium = "medium",
  Large = "large",
}

export interface ButtonProps {
  type?: ButtonTypes;
  backgroundColor?: string;
  size?: ButtonSizes;
  label: string;
  onClick?: h.JSX.MouseEventHandler<HTMLButtonElement>;
}

/**
 * UI component for user interaction
 *
 * @param {object} props
 * @param {string} [props.type='primary'] Default is `primary`
 * @param {string} [props.size='medium'] Default is `'medium'`
 * @param {string} props.label
 * @param {function} props.onClick
 */
export const Button = ({
  type = ButtonTypes.Primary,
  size = ButtonSizes.Medium,
  label,
  ...props
}: ButtonProps) => {
  return (
    <button
      type="button"
      className={[
        styles.button,
        styles[`button--${size}`],
        styles[`button--${type}`],
      ].join(" ")}
      {...props}
    >
      {label}
    </button>
  );
};
