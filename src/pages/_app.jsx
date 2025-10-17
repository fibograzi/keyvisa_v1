import "@/styles/globals.css";
import Head from "next/head";
import { LanguageProvider } from "@/components/LanguageProvider";

export default function App({ Component, pageProps }) {
  return (
    <LanguageProvider>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Personal visa consulting for Russian citizens — KEYVISA" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Playfair+Display:wght@600;700&display=swap" rel="stylesheet" />
        <link rel="icon" href="/favicon.ico" />
        <title>KEYVISA — Visa consulting</title>
      </Head>
      <Component {...pageProps} />
    </LanguageProvider>
  );
}
