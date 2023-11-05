import Link from 'next/link';
import { FunctionComponent, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  href: string;
}

const a: FunctionComponent<Props> = ({ children, href }) => {
  if (!href.startsWith('/')) {
    return (
      <a href={href} target={href.startsWith('#') ? '' : '_blank'}>
        {children}
      </a>
    );
  }
  return <Link href={href}>{children}</Link>;
};

export default a;
