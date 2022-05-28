import styles from '../../styles/Home.module.css';
import { useRouter } from 'next/router';

function DetailPage() {
  const router = useRouter();
  return <h1 className={styles.news}>Detail Page {router.query.newsId}</h1>;
}

export default DetailPage;
