import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import styles from "../styles/Home.module.css";
import "@fontsource/roboto";
import Sidebar from "../components/Sidebar";
import Navigation from "../components/Navigation";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Bookler</title>
        <meta
          name="description"
          content="Book Your Perfect Deals on Flights, Hotles, Villas and Taxis"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="relative">
        <Header />
        <Sidebar />
        <Navigation />
      </div>
    </div>
  );
}
