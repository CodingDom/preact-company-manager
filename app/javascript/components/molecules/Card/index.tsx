import { ComponentChildren, FunctionalComponent } from "preact";
import * as styles from "./Card.module.scss";
import { Anchor, AnchorProps } from "../../atoms/Anchor";
import { Row } from "../../atoms/Row";

export interface CardProps {
  heading?: string;
  cta?: AnchorProps;
  className?: string;
  children: ComponentChildren;
}

export const Card: FunctionalComponent<CardProps> = ({
  children,
  className,
  cta,
  heading,
}) => (
  <div className={[styles.card, className].join(" ")}>
    {renderHeading(heading, cta)}
    {children}
  </div>
);

const renderHeading = (
  heading?: string,
  cta?: AnchorProps
): ComponentChildren => {
  if (!heading && !cta) {
    return undefined;
  }

  return (
    <div className={styles["card__header"]}>
      <Row>
        <h3>{heading}</h3>
        {cta ? <Anchor {...cta} /> : undefined}
      </Row>
    </div>
  );
};
