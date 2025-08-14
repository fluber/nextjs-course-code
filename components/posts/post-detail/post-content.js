import ReactMarkdown from "react-markdown";
import Image from "next/image";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/cjs/styles/prism"; // theme
import PostHeader from "./post-header";
import classes from "./post-content.module.css";

// const DUMMY_POST = {
//   slug: "getting-started-with-nextjs",
//   title: "Getting Started with Next.js",
//   image: "getting-started-nextjs.png",
//   date: "2022-02-10",
//   content: "# This is a first post",
// };
export default function PostContent(props) {
  const post = props.post;
  const imagePath = `/images/posts/${post.slug}/${post.image}`;
  const customComponents = {
    p({ node, children }) {
      // If this paragraph's first child is an image node
      if (
        node.children &&
        node.children[0] &&
        node.children[0].tagName === "img"
      ) {
        const image = node.children[0];
        return (
          <div className={classes.image}>
            <Image
              src={`/images/posts/${post.slug}/${image.properties.src}`}
              alt={image.properties.alt || ""}
              width={600}
              height={300}
              priority // instead of fetchPriority
            />
          </div>
        );
      }
      return <p>{children}</p>;
    },
    code({ className, children, ...props }) {
      const match = /language-(\w+)/.exec(className || "");
      return match ? (
        <SyntaxHighlighter
          style={oneDark}
          language={match[1]}
          PreTag="div"
          {...props}
        >
          {String(children).replace(/\n$/, "")}
        </SyntaxHighlighter>
      ) : (
        <code className={className} {...props}>
          {children}
        </code>
      );
    },
  };
  return (
    <article className={classes.content}>
      <PostHeader title={post.title} image={imagePath} />
      <ReactMarkdown components={customComponents}>
        {post.content}
      </ReactMarkdown>
    </article>
  );
}
