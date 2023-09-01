import Link from "next/link";
import { notFound } from "next/navigation";

import { getMDXComponent } from "next-contentlayer/hooks";

import { css } from "@panda/css";
import { allPosts, type Post } from "contentlayer/generated";


import type { MDXComponents } from "mdx/types";

interface Params {
  slug: string;
}

interface Props {
  params: Params;
}

export async function generateStaticParams() {
  const paths = allPosts.map((post) => ({
    slug: post.slug
  }));

  return paths;
}

async function getPost({ slug }: Params): Promise<Post | undefined> {
  const post = allPosts.find((post) => post.slug == slug);

  return post;
}

const mdxComponents: MDXComponents = {
  a: ({ href, children }) => <Link href={href as string}>{children}</Link>,
  h1: (props) => (
    <h2
      className={css({ color: "red", fontWeight: "bold", fontSize: "3xl" })}
      {...props}
    />
  ),

  MyComponent: () => <div>This is my component!</div>
};

export default async function BlogPostPage({ params }: Props) {
  const post = await getPost(params);

  if (!post) {
    notFound();
  }

  const MDXContent = getMDXComponent(post.body.code);

  return (
    <>
      <p>blog post page</p>
      <h1>{post.title}</h1>

      <MDXContent components={mdxComponents} />
    </>
  );
}
