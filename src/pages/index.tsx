import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Layout from '../layouts';
import { usePanel } from '../contexts/panel.context';
import { KeyboardEvent, useEffect } from 'react';
import Panel from '../domain/panel.model';

const Home: NextPage = () => {

  const { panel, setPanel } = usePanel();

  const handlePassword = (e: KeyboardEvent<HTMLDivElement>) => {
    e.preventDefault();
    const pressedKey = e.code;
    const nextKey = 'ArrowRight';
    const spaceKey = 'Space';
    const prevKey = 'ArrowLeft';
    const deleteKey = 'Delete';
    const backspaceKey = 'Backspace';
    const scapeKey = 'Escape';

    if (pressedKey === nextKey || pressedKey === spaceKey) return handleNext();
    if (pressedKey === prevKey) return handlePrev();
    if (pressedKey === deleteKey || pressedKey === scapeKey) return setPanel(Panel.start());
    if (pressedKey === backspaceKey) return handleNewPass();
  }

  const handleNext = () => {
    const audio = new Audio('/assets/sounds/1.mp3');
    audio.play();
    const nextModel = panel.next();
    setPanel(nextModel);
  };

  const handleNewPass = () => {
    const audio = new Audio('/assets/sounds/1.mp3');
    audio.play();
    setPanel(panel.setPassword(prompt("Informe a senha", '001') ?? '001'));
  }

  const handlePrev = () => {
    const prevModel = panel.prev();
    setPanel(prevModel);
  };

  useEffect(() => {
    const hasNoDoc = typeof document === 'undefined';
    if (!hasNoDoc) {
      document.addEventListener('keyup', handlePassword as any, { once: true });
      document.addEventListener('click', (ev) => {
        document.location = '/';
      });
    }
  });

  return (
    <div className={styles.container}>
      <Head>
        <title>Painel</title>
        <meta charSet="utf-8" />
        <meta name="description" content="Senha eletrônica" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no" />
        <meta name="theme-color" content="#000" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/apple-icon.png"></link>
      </Head>
      <Layout title='Senha' />
    </div>
  )
}

export default Home
