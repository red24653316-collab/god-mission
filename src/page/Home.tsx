import { Link } from 'react-router-dom';
import { Globe2, Users, Heart, ArrowRight, Radio, ShieldCheck, BookOpen } from 'lucide-react';

const STATS = [
  { name: '동남아·동북아', missionaries: 142, projects: 38, width: '85%', color: '#2563eb' },
  { name: '중앙아시아·중동', missionaries: 68, projects: 21, width: '62%', color: '#0284c7' },
  { name: '아프리카 열방', missionaries: 94, projects: 29, width: '74%', color: '#0d9488' },
  { name: '유럽·아메리카', missionaries: 53, projects: 16, width: '48%', color: '#4f46e5' },
];

const PRAYERS = [
  { id: 1, region: '동남아 A국', tag: '긴급중보', title: '현지 IT 복음 센터 건축 허가 및 리더십 세움을 위해', count: 128 },
  { id: 2, region: '중앙아시아 K국', tag: '사역보고', title: '유목민 마을 의료 봉사 및 성경 번역 2차 완료', count: 94 },
  { id: 3, region: '동아프리카 T국', tag: '교육선교', title: '다음 세대 디지털 학교 컴퓨터 30대 보급 및 교사 파송', count: 156 },
];

export default function Home() {
  return (
    <div>
      {/* 히어로 섹션 */}
      <section style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e3a8a 60%, #1d4ed8 100%)', color: '#fff', padding: '4rem 1.5rem 5rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', alignItems: 'center' }}>
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', backgroundColor: 'rgba(255,255,255,0.12)', padding: '0.4rem 0.9rem', borderRadius: '999px', fontSize: '0.82rem', fontWeight: 600, marginBottom: '1.2rem' }}>
              <Radio size={14} color="#38bdf8" />
              <span>GODNET 공식 연계 글로벌 선교 네트워크</span>
            </div>
            <h1 style={{ fontSize: '2.6rem', fontWeight: 800, lineHeight: 1.2, margin: '0 0 1rem 0' }}>
              열방의 현장을 잇는<br />
              <span style={{ color: '#60a5fa' }}>디지털 선교 허브</span>
            </h1>
            <p style={{ fontSize: '1rem', color: '#cbd5e1', lineHeight: 1.6, marginBottom: '2rem' }}>
              전 세계 64개국 선교 현장의 생생한 사역 보고와 긴급 중보기도 제목을 실시간으로 연결하고, 투명한 사역 데이터로 열방과 함께합니다.
            </p>
            <div style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap' }}>
              <Link to="/board" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.8rem 1.5rem', backgroundColor: '#3b82f6', color: '#fff', borderRadius: '10px', textDecoration: 'none', fontWeight: 700 }}>
                선교 소식·기도 보기 <ArrowRight size={18} />
              </Link>
			  <a href="https://god-network.app" target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', padding: '0.8rem 1.4rem', backgroundColor: 'rgba(255,255,255,0.12)', color: '#fff', borderRadius: '10px', textDecoration: 'none', fontWeight: 600 }}>
			    GOD 사이트 연결
			  </a>
            </div>
          </div>

          <div style={{ backgroundColor: 'rgba(15, 23, 42, 0.7)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '16px', padding: '1.75rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.2rem' }}>
              <span style={{ fontWeight: 700 }}>실시간 선교 네트워크 현황</span>
              <span style={{ fontSize: '0.75rem', backgroundColor: '#059669', padding: '0.2rem 0.6rem', borderRadius: '999px', fontWeight: 600 }}>LIVE 연동중</span>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div style={{ backgroundColor: 'rgba(255,255,255,0.06)', padding: '1rem', borderRadius: '12px' }}>
                <div style={{ color: '#94a3b8', fontSize: '0.8rem' }}>파송 국가</div>
                <div style={{ fontSize: '1.6rem', fontWeight: 800, color: '#60a5fa' }}>64개국</div>
              </div>
              <div style={{ backgroundColor: 'rgba(255,255,255,0.06)', padding: '1rem', borderRadius: '12px' }}>
                <div style={{ color: '#94a3b8', fontSize: '0.8rem' }}>협력 선교사</div>
                <div style={{ fontSize: '1.6rem', fontWeight: 800, color: '#34d399' }}>357가정</div>
              </div>
              <div style={{ backgroundColor: 'rgba(255,255,255,0.06)', padding: '1rem', borderRadius: '12px' }}>
                <div style={{ color: '#94a3b8', fontSize: '0.8rem' }}>진행 프로젝트</div>
                <div style={{ fontSize: '1.6rem', fontWeight: 800, color: '#fbbf24' }}>104건</div>
              </div>
              <div style={{ backgroundColor: 'rgba(255,255,255,0.06)', padding: '1rem', borderRadius: '12px' }}>
                <div style={{ color: '#94a3b8', fontSize: '0.8rem' }}>이달의 중보기도</div>
                <div style={{ fontSize: '1.6rem', fontWeight: 800, color: '#f472b6' }}>4,820회</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 특장점 그리드 카드 구조 */}
      <section style={{ maxWidth: '1200px', margin: '-2.2rem auto 3rem', padding: '0 1.5rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: '1.2rem' }}>
        <div style={{ backgroundColor: '#fff', padding: '1.5rem', borderRadius: '14px', border: '1px solid #e2e8f0' }}>
          <Globe2 size={24} color="#2563eb" />
          <h3 style={{ fontSize: '1.05rem', margin: '0.8rem 0 0.3rem' }}>글로벌 현장 네트워크</h3>
          <p style={{ margin: 0, fontSize: '0.88rem', color: '#64748b' }}>대륙별 선교지 거점과 실시간 소식 연동</p>
        </div>
        <div style={{ backgroundColor: '#fff', padding: '1.5rem', borderRadius: '14px', border: '1px solid #e2e8f0' }}>
          <Heart size={24} color="#e11d48" />
          <h3 style={{ fontSize: '1.05rem', margin: '0.8rem 0 0.3rem' }}>24시간 중보기도 체인</h3>
          <p style={{ margin: 0, fontSize: '0.88rem', color: '#64748b' }}>긴급 기도제목 공유 및 성도 중보 참여</p>
        </div>
        <div style={{ backgroundColor: '#fff', padding: '1.5rem', borderRadius: '14px', border: '1px solid #e2e8f0' }}>
          <BookOpen size={24} color="#059669" />
          <h3 style={{ fontSize: '1.05rem', margin: '0.8rem 0 0.3rem' }}>디지털·교육 선교</h3>
          <p style={{ margin: 0, fontSize: '0.88rem', color: '#64748b' }}>현지 IT 아카데미 및 차세대 리더 양성</p>
        </div>
        <div style={{ backgroundColor: '#fff', padding: '1.5rem', borderRadius: '14px', border: '1px solid #e2e8f0' }}>
          <ShieldCheck size={24} color="#7c3aed" />
          <h3 style={{ fontSize: '1.05rem', margin: '0.8rem 0 0.3rem' }}>투명한 사역 아카이브</h3>
          <p style={{ margin: 0, fontSize: '0.88rem', color: '#64748b' }}>프로젝트별 진행률 및 결과 리포트 공개</p>
        </div>
      </section>

      {/* 하단 대시보드 (통계 그래프 / 긴급기도 요약) */}
      <section style={{ maxWidth: '1200px', margin: '0 auto 4rem', padding: '0 1.5rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '2rem' }}>
        {/* 권역별 통계 */}
        <div style={{ backgroundColor: '#fff', padding: '1.75rem', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
            <div>
              <h2 style={{ fontSize: '1.2rem', margin: '0 0 0.25rem' }}>대륙별 파송 및 프로젝트 현황</h2>
              <p style={{ margin: 0, fontSize: '0.85rem', color: '#64748b' }}>GOD Mission 권역별 사역 지표</p>
            </div>
            <Users size={20} color="#64748b" />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
            {STATS.map((s, i) => (
              <div key={i}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', marginBottom: '0.4rem' }}>
                  <span style={{ fontWeight: 600 }}>{s.name}</span>
                  <span style={{ color: '#475569' }}>선교사 {s.missionaries}명 · 프로젝트 {s.projects}건</span>
                </div>
                <div style={{ width: '100%', height: '10px', backgroundColor: '#f1f5f9', borderRadius: '999px' }}>
                  <div style={{ width: s.width, height: '100%', backgroundColor: s.color, borderRadius: '999px' }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 실시간 긴급 기도제목 피드 */}
        <div style={{ backgroundColor: '#fff', padding: '1.75rem', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
            <div>
              <h2 style={{ fontSize: '1.2rem', margin: '0 0 0.25rem' }}>실시간 긴급 중보기도 피드</h2>
              <p style={{ margin: 0, fontSize: '0.85rem', color: '#64748b' }}>가장 최근 도착한 기도제목</p>
            </div>
            <Heart size={20} color="#e11d48" />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {PRAYERS.map((p) => (
              <div key={p.id} style={{ padding: '0.9rem', backgroundColor: '#f8fafc', borderRadius: '10px', border: '1px solid #f1f5f9' }}>
                <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.4rem', alignItems: 'center' }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#2563eb', backgroundColor: '#eff6ff', padding: '0.15rem 0.5rem', borderRadius: '4px' }}>📌 {p.region}</span>
                  <span style={{ fontSize: '0.72rem', fontWeight: 600, color: '#dc2626', backgroundColor: '#fef2f2', padding: '0.15rem 0.5rem', borderRadius: '4px' }}>{p.tag}</span>
                </div>
                <div style={{ fontSize: '0.88rem', fontWeight: 600, color: '#334155', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{p.title}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
