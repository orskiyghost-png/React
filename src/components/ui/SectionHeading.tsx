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
          effect="flip"
          mode="enter"
          splitBy="words"
          containerClassName="section__title"
        >
          {title}
        </ScrollReveal>
        {lede ? <p className="section__lede">{lede}</p> : null}
      </div>
    </div>
  );
}
