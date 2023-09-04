import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { getMDXComponent } from "next-contentlayer/hooks";

import { allPosts, type Post } from "contentlayer/generated";

import { css } from "@panda/css";
import { center } from "@panda/patterns";

import type { MDXComponents } from "mdx/types";

interface Params {
  slug: string;
}

interface Props {
  params: Params;
}

export async function generateStaticParams() {
  const paths = allPosts.map((post) => ({
    slug: post.slug,
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
  img: ({
    src,
    alt,
    placeholder,
    width: _w,
    height: _h,
    ref: _r,
    ...props
  }) => {
    if (!src) {
      return <p>Image not found</p>;
    }

    if (src.startsWith("/")) {
      return (
        <figure>
          <div
            className={css({
              position: "relative",
              minH: "md",
            })}
          >
            <Image
              className={css({
                objectFit: "contain",
                h: "full",
              })}
              src={src ?? ""}
              alt={alt ?? ""}
              fill
              {...props}
            />
          </div>
          <figcaption>
            <p>{alt}</p>
          </figcaption>
        </figure>
      );
    } else if (src.startsWith("http")) {
      return (
        <figure>
          <div
            className={center({
              position: "relative",
              minH: "md",
            })}
          >
            <img
              className={css({
                objectFit: "contain",
                position: "absolute",
                h: "full",
                w: "full",
              })}
              src={src ?? ""}
              alt={alt ?? ""}
              {...props}
            />
          </div>
          <figcaption>
            <p>{alt}</p>
          </figcaption>
        </figure>
      );
    } else {
      throw new Error("Invalid image src");
    }
  },

  MyComponent: () => <div>This is my component!</div>,
};

export default async function BlogPostPage({ params }: Props) {
  const post = await getPost(params);

  if (!post) {
    notFound();
  }

  const MDXContent = getMDXComponent(post.body.code);

  return (
    <main>
      <p>blog post page</p>
      <h1>{post.title}</h1>

      <MDXContent components={mdxComponents} />
    </main>
  );
}
