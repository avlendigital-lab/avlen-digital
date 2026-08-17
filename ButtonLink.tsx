import type { AnchorHTMLAttributes, ReactNode } from 'react';

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'quiet';
};

export function ButtonLink({ children, className = '', variant = 'primary', ...props }: ButtonLinkProps) {
  return (
    <a className={`button-link button-link--${variant} ${className}`.trim()} {...props}>
      <span>{children}</span>
      <span aria-hidden="true" className="button-link__arrow">
        →
      </span>
    </a>
  );
}
