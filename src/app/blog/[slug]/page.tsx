import { notFound } from "next/navigation";

interface Params {
  slug: string;
}

interface Props {
  params: Params;
}

export default function BlogPostPage({ params: { slug } }: Props) {
  if (slug == "404") {
    notFound();
  }

  return (
    <>
      <p>blog post page; {slug}</p>
    </>
  );
}
