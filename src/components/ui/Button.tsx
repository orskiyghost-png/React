import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";
import "./button.css";

type Variant = "primary" | "secondary" | "minimal";

type CommonProps = {
  children: ReactNode;
  variant?: Variant;
  className?: string;
};

type ButtonProps = CommonProps &
  (
    | ({
        href: string;
      } & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "className">)
    | ({
        href?: undefined;
      } & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className">)
  );

export function Button({
  children,
  variant = "primary",
  className = "",
  ...rest
}: ButtonProps) {
  const classes = `button button--${variant}${className ? ` ${className}` : ""}`;

  if (rest.href !== undefined) {
    const { href, ...anchorProps } = rest;
    return (
      <a className={classes} href={href} {...anchorProps}>
        {children}
      </a>
    );
  }

  const buttonProps = rest as ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button className={classes} type="button" {...buttonProps}>
      {children}
    </button>
  );
}
