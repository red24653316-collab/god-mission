import { Link, useLocation } from 'react-router-dom';
import { Globe, ExternalLink, HeartHandshake } from 'lucide-react';

export default function Navbar() {
  const location = useLocation();

  const navLinkStyle = (path: string) => ({
    textDecoration: 'none',
    color: location.pathname === path ? '#1d4ed8' : '#475569',
    fontWeight: location.pathname === path ? 700 : 500,
    fontSize: '0.95rem',
    padding: '0.5rem 0.75rem',
    borderRadius: '8px',
    backgroundColor: location.pathname === path ? '#eff6ff' : 'transparent',
    transition: 'all 0.2s',
  });

  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 50, backgroundColor: 'rgba(255, 255, 255, 0.95)', backdropFilter: 'blur(8px)', borderBottom: '1px solid #e2e8f0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.9rem 1.5rem' }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', textDecoration: 'none' }}>
          <div style={{ backgroundColor: '#1e3a8a', color: '#fff', padding: '0.45rem', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Globe size={22} />
          </div>
          <div>
            <span style={{ fontWeight: 800, fontSize: '1.25rem', color: '#0f172a', letterSpacing: '-0.02em' }}>GOD Mission</span>
            <span style={{ display: 'block', fontSize: '0.7rem', color: '#64748b', fontWeight: 600 }}>GLOBAL MISSION HUB</span>
          </div>
        </Link>

        <nav style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
          <Link to="/" style={navLinkStyle('/')}>글로벌 선교 현황</Link>
          <Link to="/board" style={navLinkStyle('/board')}>선교 소식·중보기도</Link>
		  {/* 33번째 줄 주소를 아래와 같이 수정하고 저장하세요 */}
		  <a
		    href="https://god-network.app"
		    target="_blank"
		    rel="noreferrer"
		    style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', marginLeft: '0.5rem', padding: '0.55rem 1rem', backgroundColor: '#1e3a8a', color: '#fff', borderRadius: '8px', textDecoration: 'none', fontSize: '0.875rem', fontWeight: 600, boxShadow: '0 2px 4px rgba(30, 58, 138, 0.2)' }}
		  >
		    <HeartHandshake size={16} />
		    GOD 메인 사이트
		    <ExternalLink size={14} />
		  </a>

            <HeartHandshake size={16} />
            GOD 메인 사이트
            <ExternalLink size={14} />
          </a>
        </nav>
      </div>
    </header>
  );
}
