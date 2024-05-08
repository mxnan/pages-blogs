/* eslint-disable jsx-a11y/aria-unsupported-elements */
import Head from "next/head";
import Navbar from "./navbar";
import Footer from "./footer";
import { ContainerProps } from "@/lib/types";

export default function Container(props: ContainerProps) {
  const { children, ...customMeta } = props;

  const meta = {
    title: "Manan, Fullstack dev",
    description: `Container for Website`,
    ...customMeta,
  };

  return (
    <div className="relative">
      <Head>
        {/* Set meta tags for SEO */}
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" key="description" aria-label="description" />
        {/* Add more meta tags as needed */}
      </Head>
      <Navbar />
      <div className="flex flex-col justify-center  p-8  antialiased">
        {children}
      </div>
      <Footer />
    </div>
  );
}
