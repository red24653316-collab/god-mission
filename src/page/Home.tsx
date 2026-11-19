import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <main style={{ maxWidth: '960px', margin: '0 auto', padding: '4rem 1.5rem', textAlign: 'center' }}>
      <span style={{ backgroundColor: '#dbeafe', color: '#1e40af', padding: '0.35rem 0.9rem', borderRadius: '999px', fontSize: '0.85rem', fontWeight: 600 }}>
        GOD 사이트 공식 연계 플랫폼
      </span>
      <h1 style={{ fontSize: '2.5rem', margin: '1.2rem 0', color: '#111827' }}>
        GOD Mission
      </h1>
      <p style={{ color: '#4b5563', fontSize: '1.1rem', lineHeight: 1.6, marginBottom: '2.5rem' }}>
        전 세계 선교지의 소식과 기도제목을 실시간으로 공유하고,<br />
        GOD 플랫폼의 자원과 사역을 하나로 연결합니다.
      </p>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
        <Link to="/board" style={{ padding: '0.8rem 1.6rem', backgroundColor: '#1e3a8a', color: '#fff', borderRadius: '8px', textDecoration: 'none', fontWeight: 600 }}>
          선교 소식 및 기도제목 보기
        </Link>
      </div>
    </main>
  );
}
