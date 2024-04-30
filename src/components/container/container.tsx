import Head from "next/head";
import Navbar from "./navbar";
import Footer from "./footer";

export default function Container(props: any) {
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
        <meta content={meta.description} name="description" />
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
