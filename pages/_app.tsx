import "../styles/globals.css";
import type { AppProps } from "next/app";
import Page from "../components/Page";
import { SideMenu } from "../components/SideMenu";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";

export default function App({ Component, pageProps }: AppProps) {
  const [isHome, setIsHome] = useState<boolean>(true);

  return (
    <div className="flex h-full min-h-screen w-full relative">
      <AnimatePresence>
        <SideMenu isHome={isHome} setIsHome={setIsHome} />
        {/* <Page isHome={isHome}> */}

        <Component {...pageProps} isHome={isHome} setIsHome={setIsHome} />
        {/* </Page> */}
      </AnimatePresence>
    </div>
  );
}
