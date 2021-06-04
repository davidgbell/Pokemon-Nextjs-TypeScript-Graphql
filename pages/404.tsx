import Link from 'next/link';
import { Layout } from '../components/Layout';

const NotFoundPage = () => {
  return (
    <Layout title='404: Page Not Found'>
      <h1>404: Page Not Found</h1>
      <Link href='/'>Go back</Link>
    </Layout>
  );
};

export default NotFoundPage;
