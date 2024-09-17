export const getErrorMessage = (errorCode: string): string => {
  switch (errorCode) {
    case 'OPENAPI00001':
      return '서버 내부에서 오류가 발생했습니다.';
    case 'OPENAPI00002':
      return '요청 권한이 없습니다.';
    case 'OPENAPI00003':
      return '2023년 12월 21일 이후 접속 기록이 없습니다.';
    case 'OPENAPI00004':
      return '유효하지 않은 닉네임 입니다.';
    case 'OPENAPI00005':
      return '유효하지 않는 API KEY 요청입니다.';
    case 'OPENAPI00006':
      return '유효하지 않은 API PATH 요청입니다.';
    case 'OPENAPI00007':
      return 'API 호출량이 많아 지연되고 있습니다.';
    case 'OPENAPI00009':
      return '데이터가 준비 중입니다.';
    case 'OPENAPI00010':
      return '메이플스토리가 점검 중입니다.';
    case 'OPENAPI00011':
      return '넥슨 API가 점검 중입니다.';
    default:
      return '알 수 없는 오류가 발생했습니다.';
  }
};
