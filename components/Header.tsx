import Link from 'next/link';

export const Header = () => {
  return (
    <header className='header'>
      <Link href='/'>Home</Link>
      <Link href='/captured'>Captured </Link>
    </header>
  );
};
