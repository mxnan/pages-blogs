import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Inter, Titillium_Web } from "next/font/google";

const title = Inter({
  display: "swap",
  variable: "--font-title",
  subsets: ["latin"],
});

const body = Titillium_Web({
  weight: ["200", "300", "400", "600", "700", "900"],
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${title.variable} ${body.variable} font-body`}>
      <Component {...pageProps} />
    </main>
  );
}
