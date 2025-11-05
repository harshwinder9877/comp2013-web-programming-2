import PostCard from "./PostCard";

export default function PostsContainer({ posts = [] }) {
  if (!posts.length) return <p className="center">No posts yet.</p>;

  return (
    <div>
      {posts.map((p) => (
        <PostCard key={p.id} post={p} />
      ))}
    </div>
  );
}