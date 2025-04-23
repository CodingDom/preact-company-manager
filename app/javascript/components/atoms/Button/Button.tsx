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
  size?: "small" | "medium" | "large";
  label: string;
  onClick?: h.JSX.MouseEventHandler<HTMLButtonElement>;
}

/**
 * Primary UI component for user interaction
 *
 * @param {object} props
 * @param {string} [props.type='primary'] Default is `primary`
 * @param {'small' | 'medium' | 'large'} [props.size='medium'] Default is `'medium'`
 * @param {string} props.label
 * @param {function} props.onClick
 */
export const Button = ({
  type = ButtonTypes.Primary,
  size = "medium",
  label,
  ...props
}: ButtonProps) => {
  console.log(styles);
  return (
    <button
      type="button"
      className={[
        styles["pcm-button"],
        styles[`pcm-button--${size}`],
        styles[`pcm-button--${type}`],
      ].join(" ")}
      {...props}
    >
      {label}
    </button>
  );
};
