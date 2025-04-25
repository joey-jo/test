export interface Topic {
  id: string;
  text: string;
  category: string;
  tags: string[];
}

export const topics: Topic[] = [
  // 일상 대화
  {
    id: 'daily-1',
    text: '오늘 하루 중 가장 기억에 남는 순간은 무엇인가요?',
    category: '일상',
    tags: ['일상', '회고', '경험']
  },
  {
    id: 'daily-2',
    text: '최근에 새롭게 시작한 습관이나 취미가 있나요?',
    category: '일상',
    tags: ['습관', '취미', '변화']
  },
  {
    id: 'daily-3',
    text: '가장 기억에 남는 선물은 무엇인가요?',
    category: '일상',
    tags: ['선물', '추억', '감동']
  },

  // 음식
  {
    id: 'food-1',
    text: '가장 기억에 남는 어린 시절의 음식은 무엇인가요?',
    category: '음식',
    tags: ['음식', '추억', '어린시절']
  },
  {
    id: 'food-2',
    text: '최근에 새롭게 시도해보고 싶은 요리나 음식은 무엇인가요?',
    category: '음식',
    tags: ['요리', '음식', '도전']
  },
  {
    id: 'food-3',
    text: '가장 좋아하는 계절의 음식은 무엇인가요?',
    category: '음식',
    tags: ['계절음식', '취향', '기호']
  },

  // 여행
  {
    id: 'travel-1',
    text: '여행에서 가장 기억에 남는 순간은 무엇인가요?',
    category: '여행',
    tags: ['여행', '추억', '경험']
  },
  {
    id: 'travel-2',
    text: '다음 여행지로 가고 싶은 곳은 어디인가요?',
    category: '여행',
    tags: ['여행계획', '꿈', '목표']
  },
  {
    id: 'travel-3',
    text: '여행에서 가장 중요하게 생각하는 것은 무엇인가요?',
    category: '여행',
    tags: ['여행철학', '가치관', '취향']
  },

  // 엔터테인먼트
  {
    id: 'entertainment-1',
    text: '최근에 본 영화나 드라마 중 추천하고 싶은 작품이 있나요?',
    category: '엔터테인먼트',
    tags: ['영화', '드라마', '추천']
  },
  {
    id: 'entertainment-2',
    text: '가장 기억에 남는 책은 무엇인가요?',
    category: '엔터테인먼트',
    tags: ['책', '독서', '추억']
  },
  {
    id: 'entertainment-3',
    text: '최근에 들은 음악 중 좋았던 곡이 있나요?',
    category: '엔터테인먼트',
    tags: ['음악', '취향', '추천']
  },

  // 취미
  {
    id: 'hobby-1',
    text: '어린 시절의 장래 희망은 무엇이었나요?',
    category: '취미',
    tags: ['꿈', '희망', '어린시절']
  },
  {
    id: 'hobby-2',
    text: '주말에는 주로 무엇을 하며 시간을 보내나요?',
    category: '취미',
    tags: ['취미', '여가', '생활']
  },
  {
    id: 'hobby-3',
    text: '최근에 새롭게 시도해보고 싶은 취미가 있나요?',
    category: '취미',
    tags: ['취미', '도전', '새로운경험']
  },

  // 감정
  {
    id: 'emotion-1',
    text: '최근에 가장 행복했던 순간은 언제인가요?',
    category: '감정',
    tags: ['행복', '감정', '추억']
  },
  {
    id: 'emotion-2',
    text: '스트레스 해소법은 무엇인가요?',
    category: '감정',
    tags: ['스트레스', '건강', '관리']
  },
  {
    id: 'emotion-3',
    text: '가장 기억에 남는 선생님은 누구인가요?',
    category: '감정',
    tags: ['선생님', '추억', '감동']
  },

  // 미래
  {
    id: 'future-1',
    text: '10년 후의 자신은 어떤 모습일 것 같나요?',
    category: '미래',
    tags: ['미래', '꿈', '목표']
  },
  {
    id: 'future-2',
    text: '앞으로 이루고 싶은 목표가 있나요?',
    category: '미래',
    tags: ['목표', '꿈', '계획']
  },
  {
    id: 'future-3',
    text: '미래에 꼭 가보고 싶은 곳이 있나요?',
    category: '미래',
    tags: ['여행', '목표', '꿈']
  }
];
