import { ReactNode } from 'react';
import Head from 'next/head';

type LayoutProps = {
  title?: string;
  children: ReactNode;
};

export const Layout = ({ title = 'Default title', children }: LayoutProps) => {
  return (
    <div className='layout-wrapper'>
      <Head>
        <title>{title}</title>
        <meta name='description' content='Daves Pokemon app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      {children}
    </div>
  );
};
