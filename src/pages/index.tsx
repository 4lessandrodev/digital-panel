import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Layout from '../layouts';
import { usePanel } from '../contexts/panel.context';
import { KeyboardEvent, useEffect } from 'react';

const Home: NextPage = () => {

  const { panel, setPanel } = usePanel();

  const handlePassword = (e: KeyboardEvent<HTMLDivElement>) => {
    e.preventDefault();
    const pressedKey = e.key;
    const nextKey = 'ArrowRight';
    const prevKey = 'ArrowLeft';

    if (pressedKey === nextKey) return handleNext();
    if (pressedKey === prevKey) return handlePrev();
  }

  const handleNext = () => {
    const nextModel = panel.next();
    setPanel(nextModel);
  };

  const handlePrev = () => {
    const prevModel = panel.prev();
    setPanel(prevModel);
  };

  useEffect(() => {
    const hasNoDoc = typeof document === 'undefined';
    if (!hasNoDoc) {
      document.addEventListener('keyup', handlePassword as any, { once: true });
    }
  });

  return (
    <div className={styles.container}>
      <Head>
        <title>Painel</title>
        <meta name="description" content="Senha eletrônica" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout title='Senha' />
    </div>
  )
}

export default Home
