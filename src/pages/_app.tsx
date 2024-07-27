import { Navbar } from "@/components/container/navbar/navbar-setup";
import { Toaster } from "@/components/ui/sonner";
import { cn } from "@/lib/utils";
import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import { Orbitron, Outfit, Titillium_Web } from "next/font/google";

export const title = Orbitron({
  display: "swap",
  variable: "--font-title",
  subsets: ["latin"],
});

export const body = Outfit({
  display: "swap",
  variable: "--font-body",
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <main
        className={cn(
          "font-body container relative w-full antialiased",
          title.variable,
          body.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <Component {...pageProps} />
          <Toaster />
        </ThemeProvider>
      </main>
    </>
  );
}
