import axios from 'axios';
import type { MissionPost } from '../types/Mission';


// 추후 GOD 메인 사이트 백엔드 API 주소 연결 시 .env에 VITE_GOD_API_URL 설정
const API_BASE_URL = import.meta.env.VITE_GOD_API_URL || '';

export const godApi = axios.create({
  baseURL: API_BASE_URL,
  timeout: 5000,
});

const INITIAL_MISSIONS: MissionPost[] = [
  {
    id: 1,
    region: '아시아',
    missionary: 'GOD 글로벌 선교팀',
    title: '현지 IT 교육 센터 및 온라인 복음 플랫폼 구축 보고',
    content: '현지 청년들을 위한 디지털 역량 강화 및 말씀 네트워크가 시작되었습니다.',
    createdAt: '2026-11-19',
  },
  {
    id: 2,
    region: '국내/열방',
    missionary: 'GOD Mission 중보네트워크',
    title: '전 세계 선교지 실시간 긴급 기도제목 공유',
    content: '각 지역 사역자들의 안전과 현지 교회 자립을 위해 함께 기도해 주세요.',
    createdAt: '2026-11-19',
  },
];

export const fetchMissionPosts = async (): Promise<MissionPost[]> => {
  if (!API_BASE_URL) {
    return INITIAL_MISSIONS;
  }
  const response = await godApi.get<MissionPost[]>('/api/missions');
  return response.data;
};
