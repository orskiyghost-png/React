import type { ReactNode } from "react";
import { ScrollReveal } from "../reactbits/ScrollReveal";

type SectionHeadingProps = {
  index: string;
  title: ReactNode;
  lede?: string;
};

export function SectionHeading({ index, title, lede }: SectionHeadingProps) {
  return (
    <div className="section__head">
      <p className="section__index">({index})</p>
      <div>
        <ScrollReveal
          effect="rise"
          mode="enter"
          splitBy="words"
          duration={0.65}
          stagger={0.04}
          baseOpacity={0}
          baseRotation={0}
          enableBlur={false}
          containerClassName="section__title"
        >
          {title}
        </ScrollReveal>
        {lede ? (
          <p className="section__lede" data-reveal>
            {lede}
          </p>
        ) : null}
      </div>
    </div>
  );
}
