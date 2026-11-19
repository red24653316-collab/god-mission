import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 2rem', borderBottom: '1px solid #e5e7eb', backgroundColor: '#ffffff' }}>
      <div style={{ fontWeight: 'bold', fontSize: '1.35rem', color: '#1e3a8a' }}>
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>GOD Mission</Link>
      </div>
      <nav style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
        <Link to="/" style={{ textDecoration: 'none', color: '#374151', fontWeight: 500 }}>선교 현황</Link>
        <Link to="/board" style={{ textDecoration: 'none', color: '#374151', fontWeight: 500 }}>선교 소식·기도</Link>
		<a 
		       href="https://godnet.app/" 
		       target="_blank" 
		       rel="noreferrer"
		       style={{ padding: '0.45rem 0.9rem', backgroundColor: '#1e3a8a', color: '#fff', borderRadius: '6px', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 600 }}
		     >
		       GOD 메인 사이트 ↗
		     </a>
      </nav>
    </header>
  );
}
