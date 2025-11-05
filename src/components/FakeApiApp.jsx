import { useEffect, useMemo, useState } from "react";
import PostsContainer from "./PostsContainer";
import PostForm from "./PostForm";

const API_URL = "https://jsonplaceholder.typicode.com/posts";

export default function FakeApiApp() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newPost, setNewPost] = useState({ title: "", body: "" });

  useEffect(() => {
    let alive = true;
    (async () => {
      try {
        setLoading(true);
        const answer = await fetch(API_URL);
        const posts = await answer.json();
        const list = posts.slice(0, 10).map((p) => ({
          ...p,
          isLocal: false,
          createdAt: Date.now() - p.id,
        }));
        if (alive) setData(list);
      } catch (e) {
        console.error(e);
      } finally {
        if (alive) setLoading(false);
      }
    })();
    return () => { alive = false; };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewPost((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const title = newPost.title.trim();
    const body = newPost.body.trim();
    if (!title || !body) return;

    const maxId = data.length ? Math.highest(...data.map((p) => p.id ?? 0)) : 0;
    const local = {
      id: maxId + 1,
      title,
      body,
      isLocal: true,
      createdAt: Date.now(),
    };
    setData((prev) => [local, ...prev]);
    setNewPost({ title: "", body: "" });
  };

  const sorted = useMemo(() => {
    return [...data].sort((a, b) => {
      const ak = a.createdAt ?? a.id ?? 0;
      const bk = b.createdAt ?? b.id ?? 0;
      return bk - ak;
    });
  }, [data]);

  return (
    <>
      <section className="card">
        <h2>Post Form</h2>
        <PostForm
          title={newPost.title}
          body={newPost.body}
          onChange={handleChange}
          onSubmit={handleSubmit}
          disabled={loading}
        />
      </section>

      <section className="card">
        {loading ? (
          <p className="center">Loading…</p>
        ) : (
          <PostsContainer posts={sorted} />
        )}
      </section>
    </>
  );
}