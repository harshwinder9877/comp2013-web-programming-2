export default function PostCard({ post }) {
  if (!post) return null;
  return (
    <article className="card">
      <h3 className="post-title">{post.title}</h3>
      <p className="post-body">{post.body}</p>
      <div className="center">
        <span className="tag">{post.isLocal ? "Local" : "API"}</span>
      </div>
    </article>
  );
}