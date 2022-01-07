import "@/pages/styles.css";
import Head from "next/head";

function App({ Component, pageProps }: any) {
  return (
    <>
      <Head>
        <title>Dee-Dot_Dolla</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App;
