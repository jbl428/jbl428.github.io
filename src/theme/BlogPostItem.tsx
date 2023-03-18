import React from "react";
import OriginalBlogPostItem from "@theme-original/BlogPostItem";
import GiscusComponent from "@site/src/components/GiscusComponent";
// @ts-expect-error internal code
import { useBlogPost } from "@docusaurus/theme-common/internal";

function BlogPostItem(props) {
  const { isBlogPostPage } = useBlogPost();

  return (
    <>
      <OriginalBlogPostItem {...props} />
      {isBlogPostPage && <GiscusComponent />}
    </>
  );
}

export default BlogPostItem;
