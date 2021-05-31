import { ReactNode } from 'react';
import Head from 'next/head';

type LayoutProps = {
  title?: string;
  icon?: string;
  children: ReactNode;
};

export const Layout = ({ title, children }: LayoutProps) => {
  return (
    <div className='layout-wrapper'>
      <Head>
        <title>{title ? title : 'Pokedex'}</title>
        <meta name='description' content='Daves Pokemon app' />
        <link rel='icon' href='/charmander.png' />
      </Head>
      {children}
    </div>
  );
};
