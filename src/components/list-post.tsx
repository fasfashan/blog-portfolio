import PostPreview from "./post-preview";

export default function ListPost({ posts }) {
  return (
    <div className="flex flex-col ">
      {posts.map(({ node }) => (
        <PostPreview key={node.slug} title={node.title} date={node.date} author={node.author} slug={node.slug} excerpt={node.excerpt} />
      ))}
    </div>
  );
}
