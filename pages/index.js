import Head from "next/head";
import Menu from "../Components/Menu.js";
import Banner from "../Components/Banner";
import Platformtab from "../Components/Platformtab";
import Bignews from "../Components/Bignews";
import Faq from "../Components/Faq";
import Testimonal from "../Components/Testimonal";
import Footer from "../Components/Footer";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <div>
        <Head>
          <title>Themila</title>
          ￼ ￼
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/tw-elements/dist/css/index.min.css"
          />
          <script src="https://cdn.jsdelivr.net/npm/tw-elements/dist/js/index.min.js"></script>
        </Head>
        <Menu />
        <Banner />
        <Platformtab />
        <Bignews />
        <Faq />
        <Testimonal />
        <Footer />
      </div>
    </>
  );
}
