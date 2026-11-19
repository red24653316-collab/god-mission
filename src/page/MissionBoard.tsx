import { useEffect, useState } from 'react';
import { fetchMissionPosts } from '../api/godApi';
import type { MissionPost } from '../types/Mission';

export default function MissionBoard() {
  const [posts, setPosts] = useState<MissionPost[]>([]);

  useEffect(() => {
    fetchMissionPosts().then(setPosts);
  }, []);

  return (
    <section style={{ maxWidth: '960px', margin: '0 auto', padding: '2.5rem 1.5rem' }}>
      <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: '#111827' }}>선교 현장 소식 및 중보기도</h2>
      <div style={{ display: 'grid', gap: '1rem' }}>
        {posts.map((post) => (
          <article key={post.id} style={{ padding: '1.5rem', border: '1px solid #e5e7eb', borderRadius: '8px', backgroundColor: '#fff' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', color: '#6b7280', marginBottom: '0.5rem' }}>
              <span>[{post.region}] {post.missionary}</span>
              <span>{post.createdAt}</span>
            </div>
            <h3 style={{ fontSize: '1.15rem', margin: '0 0 0.5rem 0', color: '#1f2937' }}>{post.title}</h3>
            <p style={{ margin: 0, color: '#4b5563', lineHeight: 1.5 }}>{post.content}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
