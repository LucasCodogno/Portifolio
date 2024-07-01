import "@/styles/globals.css";
import type { AppProps } from "next/app";
import MUIWrapper from "./components/theme/MUIWrapper";
import Header from "./components/Header/header";
import NextNprogress from "nextjs-progressbar";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <MUIWrapper>
    {/* <SessionProvider session={pageProps.session}> */}
      <NextNprogress color="#29D" startPosition={0.3} stopDelayMs={200} height={3} />
      <Header />
      <Component {...pageProps} />
    {/* </SessionProvider> */}
  </MUIWrapper>
  )
}
