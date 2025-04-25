// version 1.0.0

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
  },

  // 인간관계
  {
    id: 'human-relations-1',
    text: '인간관계에서 가장 중요하다고 생각하는 것은 무엇인가요?',
    category: '인간관계',
    tags: ['인간관계', '중요', '생각']
  },
  {
    id: 'human-relations-2',
    text: '당신이 존경하는 사람은 누구인가요?',
    category: '인간관계',
    tags: ['존경', '사람', '존경']
  },
  {
    id: 'human-relations-3',
    text: '사람과 사람 사이의 신뢰는 어떻게 쌓을 수 있을까요?',
    category: '인간관계',
    tags: ['신뢰', '사람', '쌓기']
  },

  // 우리
  {
    id: 'we-1',
    text: '우리 가족만의 특별한 전통이나 관습이 있나요?',
    category: '가족',
    tags: ['가족', '전통', '관습']
  },
  {
    id: 'we-2',
    text: '우리나라의 문화 중 가장 자랑스럽게 생각하는 것은 무엇인가요?',
    category: '문화',
    tags: ['문화', '자랑', '국가']
  },
  {
    id: 'we-3',
    text: '우리 동네에서 가장 기억에 남는 장소는 어디인가요?',
    category: '장소',
    tags: ['동네', '장소', '추억']
  },

  // 말하기
  {
    id: 'speaking-1',
    text: '당신이 가장 기억에 남는 대화는 무엇인가요?',
    category: '대화',
    tags: ['대화', '기억', '추억']
  },
  {
    id: 'speaking-2',
    text: '어떤 상황에서 말하기가 가장 어려웠나요?',
    category: '대화',
    tags: ['대화', '어려움', '경험']
  },
  {
    id: 'speaking-3',
    text: '효과적인 대화를 위한 비결은 무엇이라고 생각하나요?',
    category: '대화',
    tags: ['대화', '효과', '비결']
  },

  // 알기
  {
    id: 'knowing-1',
    text: '당신이 가장 최근에 새롭게 알게 된 것은 무엇인가요?',
    category: '학습',
    tags: ['학습', '새로운지식', '경험']
  },
  {
    id: 'knowing-2',
    text: '어떤 것을 알게 되었을 때 가장 기뻤나요?',
    category: '학습',
    tags: ['학습', '기쁨', '경험']
  },
  {
    id: 'knowing-3',
    text: '알고 싶지만 아직 모르는 것이 있다면 무엇인가요?',
    category: '학습',
    tags: ['학습', '호기심', '목표']
  },

  // 사회
  {
    id: 'society-1',
    text: '현대 사회에서 가장 중요하다고 생각하는 가치는 무엇인가요?',
    category: '사회',
    tags: ['사회', '가치', '현대']
  },
  {
    id: 'society-2',
    text: '사회적 문제 중 가장 시급하게 해결해야 할 것은 무엇이라고 생각하나요?',
    category: '사회',
    tags: ['사회', '문제', '해결']
  },
  {
    id: 'society-3',
    text: '사회에서 당신의 역할은 무엇이라고 생각하나요?',
    category: '사회',
    tags: ['사회', '역할', '생각']
  },

  // 좋음
  {
    id: 'good-1',
    text: '당신이 가장 좋아하는 계절은 무엇인가요?',
    category: '취향',
    tags: ['계절', '취향', '선호']
  },
  {
    id: 'good-2',
    text: '좋은 친구의 조건은 무엇이라고 생각하나요?',
    category: '인간관계',
    tags: ['친구', '조건', '생각']
  },
  {
    id: 'good-3',
    text: '좋은 일이 일어났을 때 어떻게 기뻐하나요?',
    category: '감정',
    tags: ['기쁨', '감정', '경험']
  },

  // 받기
  {
    id: 'receiving-1',
    text: '가장 기억에 남는 선물은 무엇인가요?',
    category: '선물',
    tags: ['선물', '기억', '추억']
  },
  {
    id: 'receiving-2',
    text: '다른 사람의 도움을 받았을 때 어떤 감정이었나요?',
    category: '감정',
    tags: ['도움', '감정', '경험']
  },
  {
    id: 'receiving-3',
    text: '받은 칭찬 중 가장 기억에 남는 것은 무엇인가요?',
    category: '감정',
    tags: ['칭찬', '기억', '감정']
  },

  // 집
  {
    id: 'house-1',
    text: '당신의 이상적인 집은 어떤 모습인가요?',
    category: '주거',
    tags: ['집', '이상', '꿈']
  },
  {
    id: 'house-2',
    text: '어린 시절의 집에서 가장 기억에 남는 공간은 어디인가요?',
    category: '주거',
    tags: ['집', '기억', '어린시절']
  },
  {
    id: 'house-3',
    text: '집에서 가장 좋아하는 시간은 언제인가요?',
    category: '주거',
    tags: ['집', '시간', '취향']
  },

  // 문제
  {
    id: 'problem-1',
    text: '최근에 해결한 문제는 무엇이었나요?',
    category: '문제해결',
    tags: ['문제', '해결', '경험']
  },
  {
    id: 'problem-2',
    text: '문제가 생겼을 때 어떻게 해결하나요?',
    category: '문제해결',
    tags: ['문제', '해결', '방법']
  },
  {
    id: 'problem-3',
    text: '당신의 삶에서 가장 큰 도전이었던 문제는 무엇인가요?',
    category: '문제해결',
    tags: ['문제', '도전', '경험']
  },

  // 살기
  {
    id: 'living-1',
    text: '어디에서 살고 싶으신가요?',
    category: '주거',
    tags: ['살기', '주거', '희망']
  },
  {
    id: 'living-2',
    text: '어린 시절 어디에서 살았나요?',
    category: '주거',
    tags: ['살기', '어린시절', '기억']
  },
  {
    id: 'living-3',
    text: '살면서 가장 기억에 남는 순간은 무엇인가요?',
    category: '주거',
    tags: ['살기', '기억', '순간']
  },

  // 생각
  {
    id: 'thought-1',
    text: '당신의 가장 큰 생각은 무엇인가요?',
    category: '생각',
    tags: ['생각', '경험', '생각']
  },
  {
    id: 'thought-2',
    text: '생각이 바뀌었던 경험이 있나요?',
    category: '생각',
    tags: ['생각', '변화', '경험']
  },
  {
    id: 'thought-3',
    text: '생각을 정리하는 방법은 무엇인가요?',
    category: '생각',
    tags: ['생각', '정리', '방법']
  },

  // 만들기
  {
    id: 'making-1',
    text: '당신이 가장 최근에 만든 것은 무엇인가요?',
    category: '창작',
    tags: ['만들기', '창작', '경험']
  },
  {
    id: 'making-2',
    text: '만드는 것을 좋아하나요?',
    category: '창작',
    tags: ['만들기', '취향', '생각']
  },
  {
    id: 'making-3',
    text: '만든 것 중에서 가장 자랑스러운 것은 무엇인가요?',
    category: '창작',
    tags: ['만들기', '자랑', '경험']
  },

  // 경우
  {
    id: 'case-1',
    text: '어떤 경우에 가장 행복하신가요?',
    category: '감정',
    tags: ['행복', '감정', '경험']
  },
  {
    id: 'case-2',
    text: '어떤 경우에 가장 화가 나시나요?',
    category: '감정',
    tags: ['화', '감정', '경험']
  },
  {
    id: 'case-3',
    text: '어떤 경우에 가장 슬프신가요?',
    category: '감정',
    tags: ['슬픔', '감정', '경험']
  },

  // 문화
  {
    id: 'culture-1',
    text: '당신이 가장 좋아하는 문화는 무엇인가요?',
    category: '문화',
    tags: ['문화', '취향', '생각']
  },
  {
    id: 'culture-2',
    text: '문화적 차이를 경험한 적이 있나요?',
    category: '문화',
    tags: ['문화', '차이', '경험']
  },
  {
    id: 'culture-3',
    text: '문화를 통해 배운 것이 있나요?',
    category: '문화',
    tags: ['문화', '학습', '경험']
  },

  // 소리
  {
    id: 'sound-1',
    text: '당신이 가장 좋아하는 소리는 무엇인가요?',
    category: '소리',
    tags: ['소리', '취향', '생각']
  },
  {
    id: 'sound-2',
    text: '소리에 민감한 편인가요?',
    category: '소리',
    tags: ['소리', '민감', '생각']
  },
  {
    id: 'sound-3',
    text: '소리를 통해 기억에 남는 순간이 있나요?',
    category: '소리',
    tags: ['소리', '기억', '순간']
  },

  // 여성
  {
    id: 'woman-1',
    text: '여성의 권리와 평등에 대해 어떻게 생각하시나요?',
    category: '여성',
    tags: ['여성', '권리', '평등']
  },
  {
    id: 'woman-2',
    text: '여성으로서의 경험에서 가장 기억에 남는 순간은 무엇인가요?',
    category: '여성',
    tags: ['여성', '경험', '기억']
  },
  {
    id: 'woman-3',
    text: '여성의 사회적 역할에 대해 어떻게 생각하시나요?',
    category: '여성',
    tags: ['여성', '사회', '역할']
  },

  // 듣기
  {
    id: 'listening-1',
    text: '당신이 가장 좋아하는 음악은 무엇인가요?',
    category: '듣기',
    tags: ['듣기', '음악', '취향']
  },
  {
    id: 'listening-2',
    text: '듣는 것을 통해 배운 것이 있나요?',
    category: '듣기',
    tags: ['듣기', '학습', '경험']
  },
  {
    id: 'listening-3',
    text: '듣는 것에 민감한 편인가요?',
    category: '듣기',
    tags: ['듣기', '민감', '생각']
  },

  // 희망
  {
    id: 'hope-1',
    text: '당신이 가장 하고 싶은 것은 무엇인가요?',
    category: '희망',
    tags: ['희망', '목표', '꿈']
  },
  {
    id: 'hope-2',
    text: '하고 싶은 일을 이루기 위해 어떤 노력을 하고 있나요?',
    category: '희망',
    tags: ['희망', '노력', '목표']
  },
  {
    id: 'hope-3',
    text: '하고 싶은 일과 해야 하는 일 사이의 균형은 어떻게 맞추나요?',
    category: '희망',
    tags: ['희망', '균형', '생활']
  },

  // 함께
  {
    id: 'together-1',
    text: '누구와 같이 있을 때 가장 행복한가요?',
    category: '관계',
    tags: ['함께', '행복', '관계']
  },
  {
    id: 'together-2',
    text: '같이 하고 싶은 일이 있다면 무엇인가요?',
    category: '관계',
    tags: ['함께', '희망', '활동']
  },
  {
    id: 'together-3',
    text: '같이 살고 싶은 이상적인 동반자는 어떤 사람인가요?',
    category: '관계',
    tags: ['함께', '이상', '동반자']
  },

  // 시간
  {
    id: 'time-1',
    text: '그때가 좋았다고 생각하는 순간이 있나요?',
    category: '시간',
    tags: ['그때', '추억', '회상']
  },
  {
    id: 'time-2',
    text: '그때로 돌아갈 수 있다면 무엇을 하고 싶으신가요?',
    category: '시간',
    tags: ['그때', '가정', '희망']
  },
  {
    id: 'time-3',
    text: '그때와 지금을 비교했을 때 가장 큰 변화는 무엇인가요?',
    category: '시간',
    tags: ['그때', '변화', '비교']
  },

  // 자기
  {
    id: 'self-1',
    text: '당신의 가장 큰 장점은 무엇인가요?',
    category: '자기',
    tags: ['자기', '장점', '특성']
  },
  {
    id: 'self-2',
    text: '당신이 가장 중요하게 생각하는 것은 무엇인가요?',
    category: '자기',
    tags: ['자기', '중요', '가치관']
  },
  {
    id: 'self-3',
    text: '당신의 일상은 어떻게 이루어지나요?',
    category: '자기',
    tags: ['자기', '일상', '생활']
  },

  // 나눔
  {
    id: 'giving-1',
    text: '가장 기억에 남는 선물을 준 적이 있나요?',
    category: '나눔',
    tags: ['나눔', '선물', '기억']
  },
  {
    id: 'giving-2',
    text: '다른 사람에게 도움을 준 경험이 있나요?',
    category: '나눔',
    tags: ['나눔', '도움', '경험']
  },
  {
    id: 'giving-3',
    text: '주는 것과 받는 것 중 어떤 것이 더 행복한가요?',
    category: '나눔',
    tags: ['나눔', '행복', '생각']
  },

  // 인간
  {
    id: 'human-1',
    text: '인간관계에서 가장 중요하다고 생각하는 것은 무엇인가요?',
    category: '인간',
    tags: ['인간', '관계', '가치']
  },
  {
    id: 'human-2',
    text: '인간으로서의 가치를 어떻게 정의하시나요?',
    category: '인간',
    tags: ['인간', '가치', '정의']
  },
  {
    id: 'human-3',
    text: '인간다움에 대해 어떻게 생각하시나요?',
    category: '인간',
    tags: ['인간', '인간다움', '생각']
  },

  // 어머니
  {
    id: 'mother-1',
    text: '어머니와의 가장 기억에 남는 순간은 무엇인가요?',
    category: '어머니',
    tags: ['어머니', '기억', '순간']
  },
  {
    id: 'mother-2',
    text: '어머니에게서 배운 가장 중요한 것은 무엇인가요?',
    category: '어머니',
    tags: ['어머니', '학습', '중요']
  },
  {
    id: 'mother-3',
    text: '어머니와의 관계에서 가장 감사한 것은 무엇인가요?',
    category: '어머니',
    tags: ['어머니', '감사', '관계']
  },

  // 시대
  {
    id: 'era-1',
    text: '현재 시대의 가장 큰 특징은 무엇이라고 생각하시나요?',
    category: '시대',
    tags: ['시대', '현재', '특징']
  },
  {
    id: 'era-2',
    text: '과거 시대 중 가장 살고 싶은 시대는 언제인가요?',
    category: '시대',
    tags: ['시대', '과거', '희망']
  },
  {
    id: 'era-3',
    text: '미래 시대에 대한 당신의 기대는 무엇인가요?',
    category: '시대',
    tags: ['시대', '미래', '기대']
  },

  // 사람
  {
    id: 'person-1',
    text: '당신의 인생에서 가장 영향력 있는 사람은 누구인가요?',
    category: '사람',
    tags: ['사람', '영향', '인생']
  },
  {
    id: 'person-2',
    text: '가장 존경하는 사람은 누구인가요?',
    category: '사람',
    tags: ['사람', '존경', '생각']
  },
  {
    id: 'person-3',
    text: '함께 시간을 보내고 싶은 사람은 누구인가요?',
    category: '사람',
    tags: ['사람', '시간', '희망']
  },

  // 장소
  {
    id: 'place-1',
    text: '가장 기억에 남는 장소는 어디인가요?',
    category: '장소',
    tags: ['장소', '기억', '경험']
  },
  {
    id: 'place-2',
    text: '가장 좋아하는 장소는 어디인가요?',
    category: '장소',
    tags: ['장소', '취향', '선호']
  },
  {
    id: 'place-3',
    text: '가장 자주 가는 장소는 어디인가요?',
    category: '장소',
    tags: ['장소', '일상', '습관']
  },

  // 세계
  {
    id: 'world-1',
    text: '세계에서 가장 가보고 싶은 나라는 어디인가요?',
    category: '세계',
    tags: ['세계', '여행', '희망']
  },
  {
    id: 'world-2',
    text: '세계의 어떤 문화가 가장 흥미롭다고 생각하시나요?',
    category: '세계',
    tags: ['세계', '문화', '흥미']
  },
  {
    id: 'world-3',
    text: '세계의 어떤 문제가 가장 시급하다고 생각하시나요?',
    category: '세계',
    tags: ['세계', '문제', '생각']
  },

  // 운동
  {
    id: 'exercise-1',
    text: '가장 좋아하는 운동은 무엇인가요?',
    category: '운동',
    tags: ['운동', '취향', '선호']
  },
  {
    id: 'exercise-2',
    text: '운동을 통해 얻은 가장 큰 변화는 무엇인가요?',
    category: '운동',
    tags: ['운동', '변화', '경험']
  },
  {
    id: 'exercise-3',
    text: '운동을 시작하게 된 계기는 무엇인가요?',
    category: '운동',
    tags: ['운동', '시작', '계기']
  },

  // 학교
  {
    id: 'school-1',
    text: '학교에서 가장 기억에 남는 순간은 무엇인가요?',
    category: '학교',
    tags: ['학교', '기억', '순간']
  },
  {
    id: 'school-2',
    text: '학교에서 배운 가장 중요한 것은 무엇인가요?',
    category: '학교',
    tags: ['학교', '학습', '중요']
  },
  {
    id: 'school-3',
    text: '학교 생활에서 가장 좋았던 점은 무엇인가요?',
    category: '학교',
    tags: ['학교', '생활', '경험']
  },

  // 대통령
  {
    id: 'president-1',
    text: '대통령이 된다면 가장 먼저 해결하고 싶은 문제는 무엇인가요?',
    category: '대통령',
    tags: ['대통령', '문제', '해결']
  },
  {
    id: 'president-2',
    text: '대통령의 가장 중요한 역할은 무엇이라고 생각하시나요?',
    category: '대통령',
    tags: ['대통령', '역할', '중요']
  },
  {
    id: 'president-3',
    text: '대통령이 되기 위해 필요한 자질은 무엇이라고 생각하시나요?',
    category: '대통령',
    tags: ['대통령', '자질', '필요']
  },

  // 시작
  {
    id: 'start-1',
    text: '가장 기억에 남는 시작은 언제인가요?',
    category: '시작',
    tags: ['시작', '기억', '경험']
  },
  {
    id: 'start-2',
    text: '새로운 것을 시작할 때 가장 중요하게 생각하는 것은 무엇인가요?',
    category: '시작',
    tags: ['시작', '중요', '생각']
  },
  {
    id: 'start-3',
    text: '시작이 반이라는 말에 대해 어떻게 생각하시나요?',
    category: '시작',
    tags: ['시작', '생각', '격언']
  },

  // 정부
  {
    id: 'government-1',
    text: '정부가 해결해야 할 가장 시급한 문제는 무엇이라고 생각하시나요?',
    category: '정부',
    tags: ['정부', '문제', '해결']
  },
  {
    id: 'government-2',
    text: '정부 정책 중 가장 긍정적인 영향을 받은 것은 무엇인가요?',
    category: '정부',
    tags: ['정부', '정책', '영향']
  },
  {
    id: 'government-3',
    text: '정부에 바라는 가장 큰 변화는 무엇인가요?',
    category: '정부',
    tags: ['정부', '변화', '희망']
  },

  // 돈
  {
    id: 'money-1',
    text: '돈을 가장 많이 쓴 경험은 무엇인가요?',
    category: '돈',
    tags: ['돈', '경험', '소비']
  },
  {
    id: 'money-2',
    text: '돈을 모으는 방법에 대해 어떻게 생각하시나요?',
    category: '돈',
    tags: ['돈', '저축', '생각']
  },
  {
    id: 'money-3',
    text: '돈과 행복의 관계에 대해 어떻게 생각하시나요?',
    category: '돈',
    tags: ['돈', '행복', '생각']
  },

  // 국가
  {
    id: 'country-1',
    text: '당신이 생각하는 국가의 가장 중요한 역할은 무엇인가요?',
    category: '국가',
    tags: ['국가', '역할', '생각']
  },
  {
    id: 'country-2',
    text: '국가를 위해 할 수 있는 일은 무엇이라고 생각하시나요?',
    category: '국가',
    tags: ['국가', '기여', '생각']
  },
  {
    id: 'country-3',
    text: '국가의 미래에 대해 어떤 희망을 가지고 계신가요?',
    category: '국가',
    tags: ['국가', '미래', '희망']
  },

  // 날
  {
    id: 'day-1',
    text: '가장 기억에 남는 날은 언제인가요?',
    category: '날',
    tags: ['날', '기억', '경험']
  },
  {
    id: 'day-2',
    text: '특별한 날을 어떻게 보내시나요?',
    category: '날',
    tags: ['날', '특별', '생활']
  },
  {
    id: 'day-3',
    text: '날씨가 당신의 기분에 어떤 영향을 미치나요?',
    category: '날',
    tags: ['날', '날씨', '기분']
  },

  // 친구
  {
    id: 'friend-1',
    text: '가장 기억에 남는 친구는 누구인가요?',
    category: '친구',
    tags: ['친구', '기억', '관계']
  },
  {
    id: 'friend-2',
    text: '친구와의 관계에서 가장 중요하게 생각하는 것은 무엇인가요?',
    category: '친구',
    tags: ['친구', '관계', '중요']
  },
  {
    id: 'friend-3',
    text: '새로운 친구를 만드는 방법에 대해 어떻게 생각하시나요?',
    category: '친구',
    tags: ['친구', '만남', '생각']
  },

  // 마음
  {
    id: 'heart-1',
    text: '마음이 가장 고요해지는 순간은 언제인가요?',
    category: '마음',
    tags: ['마음', '고요', '순간']
  },
  {
    id: 'heart-2',
    text: '마음을 열고 대화하는 것이 중요한 이유는 무엇인가요?',
    category: '마음',
    tags: ['마음', '대화', '중요']
  },
  {
    id: 'heart-3',
    text: '마음의 평화를 찾는 방법은 무엇인가요?',
    category: '마음',
    tags: ['마음', '평화', '방법']
  },

  // 가다
  {
    id: 'go-1',
    text: '가장 기억에 남는 여행은 어디였나요?',
    category: '여행',
    tags: ['여행', '기억', '경험']
  },
  {
    id: 'go-2',
    text: '가고 싶은 곳이 있나요?',
    category: '여행',
    tags: ['여행', '희망', '목표']
  },
  {
    id: 'go-3',
    text: '여행을 가면서 얻은 교훈은 무엇인가요?',
    category: '여행',
    tags: ['여행', '교훈', '경험']
  },

  // 관계
  {
    id: 'relationship-1',
    text: '인간관계에서 가장 중요하게 생각하는 것은 무엇인가요?',
    category: '관계',
    tags: ['관계', '중요', '생각']
  },
  {
    id: 'relationship-2',
    text: '관계를 유지하는 데 있어 가장 어려운 점은 무엇인가요?',
    category: '관계',
    tags: ['관계', '유지', '어려움']
  },
  {
    id: 'relationship-3',
    text: '새로운 관계를 시작할 때 주의하는 점은 무엇인가요?',
    category: '관계',
    tags: ['관계', '시작', '주의']
  },

  // 아버지
  {
    id: 'father-1',
    text: '아버지와의 가장 기억에 남는 순간은 무엇인가요?',
    category: '아버지',
    tags: ['아버지', '기억', '순간']
  },
  {
    id: 'father-2',
    text: '아버지에게서 배운 가장 중요한 것은 무엇인가요?',
    category: '아버지',
    tags: ['아버지', '학습', '중요']
  },
  {
    id: 'father-3',
    text: '아버지와의 관계에서 가장 감사한 것은 무엇인가요?',
    category: '아버지',
    tags: ['아버지', '감사', '관계']
  },

  // 남자
  {
    id: 'man-1',
    text: '남성의 역할에 대해 어떻게 생각하시나요?',
    category: '남성',
    tags: ['남성', '역할', '생각']
  },
  {
    id: 'man-2',
    text: '남성다움에 대한 당신의 정의는 무엇인가요?',
    category: '남성',
    tags: ['남성', '정의', '생각']
  },
  {
    id: 'man-3',
    text: '남성과 여성의 평등에 대해 어떻게 생각하시나요?',
    category: '남성',
    tags: ['남성', '평등', '생각']
  },

  // 몸
  {
    id: 'body-1',
    text: '건강을 유지하기 위해 어떤 방법을 사용하시나요?',
    category: '건강',
    tags: ['건강', '유지', '방법']
  },
  {
    id: 'body-2',
    text: '운동을 통해 얻은 가장 큰 변화는 무엇인가요?',
    category: '건강',
    tags: ['건강', '운동', '변화']
  },
  {
    id: 'body-3',
    text: '건강한 생활습관을 유지하는 데 있어 가장 중요한 것은 무엇인가요?',
    category: '건강',
    tags: ['건강', '생활습관', '중요']
  },

  // 얼굴
  {
    id: 'face-1',
    text: '얼굴 표정이 당신의 감정에 어떤 영향을 미치나요?',
    category: '얼굴',
    tags: ['얼굴', '표정', '감정']
  },
  {
    id: 'face-2',
    text: '다른 사람의 얼굴 표정을 읽는 것이 중요한 이유는 무엇인가요?',
    category: '얼굴',
    tags: ['얼굴', '표정', '중요']
  },
  {
    id: 'face-3',
    text: '얼굴 표정을 통해 전달하고 싶은 메시지는 무엇인가요?',
    category: '얼굴',
    tags: ['얼굴', '표정', '메시지']
  },

  // 지역
  {
    id: 'region-1',
    text: '당신이 가장 좋아하는 지역은 어디인가요?',
    category: '지역',
    tags: ['지역', '좋아함', '선호']
  },
  {
    id: 'region-2',
    text: '지역의 문화적 특성에 대해 어떻게 생각하시나요?',
    category: '지역',
    tags: ['지역', '문화', '생각']
  },
  {
    id: 'region-3',
    text: '지역 발전을 위해 필요한 것은 무엇이라고 생각하시나요?',
    category: '지역',
    tags: ['지역', '발전', '필요']
  },

  // 모습
  {
    id: 'appearance-1',
    text: '당신이 바라는 자신의 모습은 어떤가요?',
    category: '모습',
    tags: ['모습', '바람', '자신']
  },
  {
    id: 'appearance-2',
    text: '다른 사람의 모습에서 배울 점은 무엇인가요?',
    category: '모습',
    tags: ['모습', '배움', '다른사람']
  },
  {
    id: 'appearance-3',
    text: '모습이 당신의 삶에 어떤 영향을 미치나요?',
    category: '모습',
    tags: ['모습', '영향', '생활']
  },

  // 생활
  {
    id: 'life-1',
    text: '당신의 하루 일과는 어떻게 되나요?',
    category: '생활',
    tags: ['생활', '일과', '일상']
  },
  {
    id: 'life-2',
    text: '생활 속에서 가장 중요하게 생각하는 것은 무엇인가요?',
    category: '생활',
    tags: ['생활', '중요', '가치']
  },
  {
    id: 'life-3',
    text: '생활의 균형을 맞추기 위해 어떤 노력을 하시나요?',
    category: '생활',
    tags: ['생활', '균형', '노력']
  },

  // 우리나라
  {
    id: 'korea-1',
    text: '우리나라의 어떤 문화가 가장 자랑스러운가요?',
    category: '우리나라',
    tags: ['우리나라', '문화', '자부심']
  },
  {
    id: 'korea-2',
    text: '우리나라에서 꼭 가보고 싶은 곳이 있나요?',
    category: '우리나라',
    tags: ['우리나라', '여행', '희망']
  },
  {
    id: 'korea-3',
    text: '우리나라의 미래는 어떤 모습일 것 같나요?',
    category: '우리나라',
    tags: ['우리나라', '미래', '전망']
  },

  // 처음
  {
    id: 'first-1',
    text: '처음으로 해본 것 중 가장 기억에 남는 것은 무엇인가요?',
    category: '경험',
    tags: ['처음', '기억', '경험']
  },
  {
    id: 'first-2',
    text: '처음 만난 사람과 어떻게 대화를 시작하시나요?',
    category: '대화',
    tags: ['처음', '만남', '대화']
  },
  {
    id: 'first-3',
    text: '처음 해보는 일에 대한 두려움을 어떻게 극복하시나요?',
    category: '도전',
    tags: ['처음', '도전', '극복']
  },

  // 손
  {
    id: 'hands-1',
    text: '당신의 손으로 만든 가장 특별한 것은 무엇인가요?',
    category: '창작',
    tags: ['손', '만들기', '경험']
  },
  {
    id: 'hands-2',
    text: '손으로 하는 취미가 있나요?',
    category: '취미',
    tags: ['손', '취미', '활동']
  },
  {
    id: 'hands-3',
    text: '손으로 글씨 쓰는 것을 좋아하시나요?',
    category: '취미',
    tags: ['손', '글씨', '선호도']
  },

  // 삶의 의미
  {
    id: 'life-meaning-1',
    text: '당신의 삶에서 가장 중요한 가치는 무엇인가요?',
    category: '삶',
    tags: ['삶', '가치', '중요']
  },
  {
    id: 'life-meaning-2',
    text: '삶의 의미를 어디에서 찾으시나요?',
    category: '삶',
    tags: ['삶', '의미', '철학']
  },
  {
    id: 'life-meaning-3',
    text: '행복한 삶을 위해 가장 필요한 것은 무엇이라고 생각하시나요?',
    category: '삶',
    tags: ['삶', '행복', '필요']
  },

  // 찾다
  {
    id: 'search-1',
    text: '당신이 찾고 있는 것은 무엇인가요?',
    category: '탐색',
    tags: ['찾기', '목표', '희망']
  },
  {
    id: 'search-2',
    text: '잃어버린 것을 찾았을 때 가장 기뻤던 경험은 무엇인가요?',
    category: '탐색',
    tags: ['찾기', '경험', '기쁨']
  },
  {
    id: 'search-3',
    text: '인생에서 찾고 있는 의미는 무엇인가요?',
    category: '탐색',
    tags: ['찾기', '의미', '인생']
  },

  // 지금
  {
    id: 'now-1',
    text: '지금 이 순간 가장 하고 싶은 것은 무엇인가요?',
    category: '현재',
    tags: ['지금', '희망', '순간']
  },
  {
    id: 'now-2',
    text: '지금까지 살아오면서 가장 잘한 선택은 무엇인가요?',
    category: '현재',
    tags: ['지금', '선택', '경험']
  },
  {
    id: 'now-3',
    text: '지금 당신에게 가장 소중한 것은 무엇인가요?',
    category: '현재',
    tags: ['지금', '소중', '가치']
  },

  // 이야기
  {
    id: 'story-1',
    text: '가장 기억에 남는 이야기는 무엇인가요?',
    category: '이야기',
    tags: ['이야기', '기억', '경험']
  },
  {
    id: 'story-2',
    text: '어떤 이야기를 다른 사람과 나누고 싶으신가요?',
    category: '이야기',
    tags: ['이야기', '공유', '소통']
  },
  {
    id: 'story-3',
    text: '당신의 인생 이야기를 영화로 만든다면 어떤 장면이 가장 인상적일까요?',
    category: '이야기',
    tags: ['이야기', '인생', '영화']
  },

  // 교육
  {
    id: 'education-1',
    text: '당신이 받은 교육 중 가장 의미 있었던 것은 무엇인가요?',
    category: '교육',
    tags: ['교육', '경험', '의미']
  },
  {
    id: 'education-2',
    text: '교육에서 가장 중요한 것은 무엇이라고 생각하시나요?',
    category: '교육',
    tags: ['교육', '중요', '가치']
  },
  {
    id: 'education-3',
    text: '미래의 교육은 어떤 모습이어야 할까요?',
    category: '교육',
    tags: ['교육', '미래', '발전']
  },

  // 구매
  {
    id: 'purchase-1',
    text: '최근에 가장 만족스러웠던 구매는 무엇인가요?',
    category: '구매',
    tags: ['구매', '만족', '경험']
  },
  {
    id: 'purchase-2',
    text: '꼭 사고 싶은 것이 있다면 무엇인가요?',
    category: '구매',
    tags: ['구매', '희망', '소원']
  },
  {
    id: 'purchase-3',
    text: '물건을 살 때 가장 중요하게 생각하는 것은 무엇인가요?',
    category: '구매',
    tags: ['구매', '가치관', '선택']
  },

  // 경제
  {
    id: 'economy-1',
    text: '경제적으로 가장 어려웠던 순간은 언제였나요?',
    category: '경제',
    tags: ['경제', '어려움', '경험']
  },
  {
    id: 'economy-2',
    text: '경제적 자유를 위해 어떤 노력을 하고 계신가요?',
    category: '경제',
    tags: ['경제', '자유', '노력']
  },
  {
    id: 'economy-3',
    text: '경제 상황이 삶에 미치는 영향에 대해 어떻게 생각하시나요?',
    category: '경제',
    tags: ['경제', '영향', '삶']
  },

  // 잡다
  {
    id: 'catch-1',
    text: '인생에서 가장 잡기 어려웠던 기회는 무엇인가요?',
    category: '도전',
    tags: ['기회', '도전', '경험']
  },
  {
    id: 'catch-2',
    text: '스트레스를 어떻게 잡으시나요?',
    category: '관리',
    tags: ['스트레스', '관리', '방법']
  },
  {
    id: 'catch-3',
    text: '균형을 잡는 것이 어려울 때는 어떻게 하시나요?',
    category: '관리',
    tags: ['균형', '관리', '방법']
  },

  // 선생님
  {
    id: 'teacher-1',
    text: '가장 기억에 남는 선생님은 누구인가요?',
    category: '교육',
    tags: ['선생님', '기억', '영향']
  },
  {
    id: 'teacher-2',
    text: '선생님께 배운 가장 중요한 가르침은 무엇인가요?',
    category: '교육',
    tags: ['선생님', '가르침', '교훈']
  },
  {
    id: 'teacher-3',
    text: '어떤 선생님이 되고 싶으신가요?',
    category: '교육',
    tags: ['선생님', '꿈', '목표']
  },

  // 예술
  {
    id: 'art-1',
    text: '당신에게 예술이란 무엇인가요?',
    category: '예술',
    tags: ['예술', '의미', '생각']
  },
  {
    id: 'art-2',
    text: '가장 감동받은 예술 작품은 무엇인가요?',
    category: '예술',
    tags: ['예술', '감동', '작품']
  },
  {
    id: 'art-3',
    text: '어떤 예술 활동을 해보고 싶으신가요?',
    category: '예술',
    tags: ['예술', '활동', '희망']
  },

  // 역사
  {
    id: 'history-1',
    text: '당신이 가장 기억에 남는 역사적 사건은 무엇인가요?',
    category: '역사',
    tags: ['역사', '사건', '기억']
  },
  {
    id: 'history-2',
    text: '역사에서 배울 수 있는 가장 중요한 교훈은 무엇이라고 생각하시나요?',
    category: '역사',
    tags: ['역사', '교훈', '학습']
  },
  {
    id: 'history-3',
    text: '역사 속 인물 중 가장 존경하는 사람은 누구인가요?',
    category: '역사',
    tags: ['역사', '인물', '존경']
  },
  {
    id: 'history-4',
    text: '역사가 현재 우리 삶에 미치는 영향은 무엇이라고 생각하시나요?',
    category: '역사',
    tags: ['역사', '영향', '현재']
  },
  {
    id: 'history-5',
    text: '역사를 통해 배운 가장 소중한 가치관은 무엇인가요?',
    category: '역사',
    tags: ['역사', '가치관', '학습']
  },

  // 읽기
  {
    id: 'reading-1',
    text: '최근에 읽은 책 중 가장 인상 깊었던 책은 무엇인가요?',
    category: '독서',
    tags: ['읽기', '책', '경험']
  },
  {
    id: 'reading-2',
    text: '읽기를 통해 얻은 가장 큰 교훈은 무엇인가요?',
    category: '독서',
    tags: ['읽기', '교훈', '학습']
  },
  {
    id: 'reading-3',
    text: '읽기 좋아하는 장소나 시간이 있나요?',
    category: '독서',
    tags: ['읽기', '장소', '시간']
  },
  {
    id: 'reading-4',
    text: '읽기를 통해 마음이 변화했던 경험이 있나요?',
    category: '독서',
    tags: ['읽기', '변화', '경험']
  },

  // 결과
  {
    id: 'result-1',
    text: '당신의 노력이 좋은 결과로 이어진 경험이 있나요?',
    category: '성과',
    tags: ['결과', '노력', '성공']
  },
  {
    id: 'result-2',
    text: '결과가 예상과 달랐을 때 어떻게 대처하셨나요?',
    category: '성과',
    tags: ['결과', '대처', '경험']
  },
  {
    id: 'result-3',
    text: '좋은 결과를 얻기 위해 어떤 준비를 하시나요?',
    category: '성과',
    tags: ['결과', '준비', '계획']
  },
  {
    id: 'result-4',
    text: '결과보다 과정이 중요하다고 생각하시나요?',
    category: '성과',
    tags: ['결과', '과정', '생각']
  },

  // 내용
  {
    id: 'content-1',
    text: '최근에 본 영화나 책의 내용 중 인상 깊었던 부분이 있나요?',
    category: '문화',
    tags: ['내용', '영화', '책']
  },
  {
    id: 'content-2',
    text: '대화할 때 내용보다 중요한 것이 있다고 생각하시나요?',
    category: '대화',
    tags: ['내용', '대화', '생각']
  },
  {
    id: 'content-3',
    text: '내용을 전달할 때 가장 중요하게 생각하는 것은 무엇인가요?',
    category: '의사소통',
    tags: ['내용', '전달', '의사소통']
  },
  {
    id: 'content-4',
    text: '내용이 없는 대화가 의미 있다고 생각하시나요?',
    category: '대화',
    tags: ['내용', '대화', '의미']
  },

  // 동안
  {
    id: 'during-1',
    text: '지금까지의 인생 동안 가장 기억에 남는 순간은 무엇인가요?',
    category: '기억',
    tags: ['동안', '기억', '인생']
  },
  {
    id: 'during-2',
    text: '하루 동안 가장 행복한 순간은 언제인가요?',
    category: '일상',
    tags: ['동안', '행복', '일상']
  },
  {
    id: 'during-3',
    text: '지난 일주일 동안 가장 큰 변화는 무엇이었나요?',
    category: '변화',
    tags: ['동안', '변화', '시간']
  },
  {
    id: 'during-4',
    text: '여행하는 동안 가장 좋아하는 활동은 무엇인가요?',
    category: '여행',
    tags: ['동안', '여행', '활동']
  },

  // 책
  {
    id: 'book-1',
    text: '최근에 읽은 책 중에서 가장 인상 깊었던 책은 무엇인가요?',
    category: '독서',
    tags: ['책', '독서', '경험']
  },
  {
    id: 'book-2',
    text: '책을 읽는 것의 가장 큰 장점은 무엇이라고 생각하시나요?',
    category: '생각',
    tags: ['책', '생각', '장점']
  },
  {
    id: 'book-3',
    text: '어린 시절 가장 기억에 남는 책은 무엇인가요?',
    category: '기억',
    tags: ['책', '기억', '어린시절']
  },
  {
    id: 'book-4',
    text: '책을 통해 배운 가장 중요한 교훈은 무엇인가요?',
    category: '학습',
    tags: ['책', '학습', '교훈']
  },

  // 중요하다
  {
    id: 'important-1',
    text: '당신에게 가장 중요한 것은 무엇인가요?',
    category: '생각',
    tags: ['중요', '생각', '가치']
  },
  {
    id: 'important-2',
    text: '어떤 것이 당신의 삶에서 중요하다고 생각하나요?',
    category: '생각',
    tags: ['중요', '생각', '삶']
  },
  {
    id: 'important-3',
    text: '중요한 결정을 내릴 때 어떻게 하시나요?',
    category: '생각',
    tags: ['중요', '생각', '결정']
  },

  // 느끼다
  {
    id: 'feel-1',
    text: '당신이 가장 강하게 느낀 감정은 무엇인가요?',
    category: '감정',
    tags: ['느낌', '감정', '경험']
  },
  {
    id: 'feel-2',
    text: '어떤 상황에서 가장 행복을 느끼나요?',
    category: '감정',
    tags: ['느낌', '행복', '상황']
  },
  {
    id: 'feel-3',
    text: '느낌을 표현하는 방법은 무엇인가요?',
    category: '감정',
    tags: ['느낌', '표현', '방법']
  },

  // 어렵다
  {
    id: 'difficult-1',
    text: '당신이 가장 어려웠던 순간은 언제인가요?',
    category: '경험',
    tags: ['어려움', '순간', '경험']
  },
  {
    id: 'difficult-2',
    text: '어려움을 극복하는 방법은 무엇인가요?',
    category: '경험',
    tags: ['어려움', '극복', '방법']
  },
  {
    id: 'difficult-3',
    text: '어려운 상황에서 배운 것이 있나요?',
    category: '경험',
    tags: ['어려움', '배움', '상황']
  },

  // 힘
  {
    id: 'strength-1',
    text: '당신이 가장 힘들었던 순간은 언제인가요?',
    category: '경험',
    tags: ['힘듦', '순간', '경험']
  },
  {
    id: 'strength-2',
    text: '힘을 내는 방법은 무엇인가요?',
    category: '경험',
    tags: ['힘듦', '극복', '방법']
  },
  {
    id: 'strength-3',
    text: '힘들 때 누구에게 도움을 청하나요?',
    category: '경험',
    tags: ['힘듦', '도움', '지지']
  },

  // 나라
  {
    id: 'country-1',
    text: '당신이 가장 좋아하는 나라는 어디인가요?',
    category: '여행',
    tags: ['나라', '선호', '여행']
  },
  {
    id: 'country-2',
    text: '나라를 방문했을 때 가장 인상 깊었던 것은 무엇인가요?',
    category: '여행',
    tags: ['나라', '방문', '경험']
  },
  {
    id: 'country-3',
    text: '나라의 문화에 대해 알고 싶은 것이 있나요?',
    category: '여행',
    tags: ['나라', '문화', '관심']
  }

]
