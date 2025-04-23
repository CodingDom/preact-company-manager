import { h } from "preact";

import * as styles from "./Anchor.module.scss";

export interface AnchorProps {
  label: string;
  href: string;
  onClick?: h.JSX.MouseEventHandler<HTMLAnchorElement>;
}

/**
 * UI component for redirecting users
 *
 * @param {object} props
 * @param {string} props.label Text displayed within Anchor component.
 * @param {string} props.href URL to navigate user to
 * @param {function} props.onClick
 */
export const Anchor = ({ label, href, ...props }: AnchorProps) => {
  return (
    <a href={href} className={styles.anchor} {...props}>
      {label}
    </a>
  );
};
