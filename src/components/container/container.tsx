/* eslint-disable jsx-a11y/aria-unsupported-elements */
import Head from "next/head";

import Footer from "./footer";
import { ContainerProps } from "@/lib/types";
import { Navbar } from "./navbar/navbar-setup";

export default function Container(props: ContainerProps) {
  const { children, ...customMeta } = props;

  const meta = {
    title: "Manan, Fullstack dev",
    description: `Container for Website`,
    ...customMeta,
  };

  return (
    <div className="max-w-[1686px] mx-auto ">
      <Head>
        {/* Set meta tags for SEO */}
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta
          content={meta.description}
          name="description"
          key="description"
          aria-label="description"
        />
        {/* Add more meta tags as needed */}
      </Head>

      <div className="min-h-screen max-w-[1536px] mx-auto w-full flexcenter pt-44">
        {children}
      </div>
      <Footer />
    </div>
  );
}
