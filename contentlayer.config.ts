import { defineDocumentType, makeSource } from "contentlayer/source-files";
import remarkUnwrapImages from "remark-unwrap-images";

export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    date: { type: "date", required: true },
    slug: { type: "string", required: true },
    published: { type: "boolean", required: true, default: false },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (post) => `/src/${post._raw.flattenedPath}`,
    },
  },
}));

export default makeSource({
  contentDirPath: "src/posts",
  documentTypes: [Post],
  mdx: {
    remarkPlugins: [remarkUnwrapImages],
  },
});
