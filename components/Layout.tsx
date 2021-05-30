import { ReactNode } from 'react';
import Head from 'next/head';

type LayoutProps = {
  title?: string;
  children: ReactNode;
};

export const Layout = ({ title = 'Default title' }: LayoutProps) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name='description' content='Daves Pokemon app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
    </div>
  );
};
