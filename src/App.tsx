import { HashRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './page/Home';
import MissionBoard from './page/MissionBoard';

export default function App() {
  return (
    <HashRouter>
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#f8fafc', fontFamily: "'Pretendard', -apple-system, BlinkMacSystemFont, system-ui, sans-serif", color: '#0f172a' }}>
        <Navbar />
        <div style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/board" element={<MissionBoard />} />
          </Routes>
        </div>
        <footer style={{ backgroundColor: '#0f172a', color: '#94a3b8', padding: '2.5rem 1.5rem', textAlign: 'center', fontSize: '0.875rem' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <p style={{ color: '#f8fafc', fontWeight: 700, fontSize: '1rem', marginBottom: '0.5rem' }}>GOD Mission Global Network</p>
            <p style={{ margin: '0 0 1rem 0' }}>전 세계 열방의 선교 현장과 성도를 실시간으로 연결하는 디지털 선교 플랫폼</p>
            <p style={{ margin: 0, fontSize: '0.8rem', color: '#64748b' }}>© 2026 GOD Mission. All rights reserved. Connected with GODNET.</p>
          </div>
        </footer>
      </div>
    </HashRouter>
  );
}
