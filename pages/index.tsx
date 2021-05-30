import { Layout } from '../components/Layout';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <Layout>
      <div className={styles.container}>
        <main className={styles.main}></main>
      </div>
    </Layout>
  );
}
