import React from 'react';
import S from './style';

const Info = () => {
  return (
    <S.LayOut>
      <S.TextWrap>
        <S.H3>정보 입력</S.H3>
        <S.H5>서비스 이용에 필요한 정보를 입력해주세요.</S.H5>
        <S.H6>리싸이쿨의 서비스 이용을 위한 회원님의 정보가 필요합니다.</S.H6>
      </S.TextWrap>
      <S.NextStep>다음으로</S.NextStep>
    </S.LayOut>
  );
};

export default Info;