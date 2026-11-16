import type { ReactNode } from "react";

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
        <h2 className="section__title">{title}</h2>
        {lede ? <p className="section__lede">{lede}</p> : null}
      </div>
    </div>
  );
}
