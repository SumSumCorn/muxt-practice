import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Blog from '../components/Blog';
import ButtonAppBar from '../components/ButtonAppBar';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Blog />
    </div>
  );
};

export default Home;
