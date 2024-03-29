import "../styles/globals.css";
import type { AppProps } from "next/app";
import Page from "../components/Page";
import { SideMenu } from "../components/SideMenu";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { AppProvider } from "../context/AppProvider";

export default function App({ Component, pageProps }: AppProps) {
  const [isHome, setIsHome] = useState<boolean>(true);
  const [data, setData] = useState<any>([]);
  //console.log(data)

  return (
    <AppProvider>
      <div className="flex h-full min-h-screen w-full relative">
        <AnimatePresence>
          <SideMenu
          // isHome={isHome}
          // setIsHome={setIsHome}
          // data={data}
          // setData={setData}
          />
          {/* <Page isHome={isHome}> */}

          <Component
            {...pageProps}
            // isHome={isHome}
            // setIsHome={setIsHome}
            // data={data}
            // setData={setData}
          />
          {/* </Page> */}
        </AnimatePresence>
      </div>
    </AppProvider>
  );
}
