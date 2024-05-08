import { BlogCard, Container } from "@/components";
import { Separator } from "@/components/ui/separator";
import { getBlogPreviews } from "@/lib/blogs";
import dayjs from "dayjs";
import { InferGetStaticPropsType } from "next";
import React from "react";

const BlogsPage = ({
  blogs,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Container title="Blogs" description="Sharing my learning and findings">
      <div className="max-w-4xl mx-auto w-full flex flex-col justify-center gap-4 p-2 ">
        <h1 className="text-7xl mb-6 font-bold font-title uppercase ">Blogs</h1>
        <p className="text-xl font-light">
          Sharing my 
          <span className="px-2 mx-2 rounded-lg border shadow-violet-500 dark:shadow-emerald-500 font-bold w-max">
            learning
          </span>
           and experiences.
        </p>

        <Separator
          orientation="horizontal"
          decorative
          className="my-5 max-w-3xl"
        />
        <div className="max-w-3xl py-8 mx-auto w-full flexcenter">
          <div className="flex-1 flex flex-col gap-6">
            {blogs.map((blog, i) => (
              <BlogCard key={i} blog={blog} />
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

export async function getStaticProps() {
  const blogs = await getBlogPreviews();
  // Sort the snippets array in descending order based on the publishedAt property
  blogs.sort((a, b) => {
    const dateA = dayjs(a.publishedAt);
    const dateB = dayjs(b.publishedAt);
    return dateB.diff(dateA);
  });

  return { props: { blogs } };
}

export default BlogsPage;
