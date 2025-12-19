import React from 'react';
import S from './style';

const Complete = () => {
  return (
    <S.LayOut>
      <S.TextWrap>
        <S.H3>가입 완료</S.H3>
        <S.H5>회원가입이 완료 되었습니다.</S.H5>
        <S.H6>가입한 이메일 계정 :  {}</S.H6>
      </S.TextWrap>
      <S.NextStep>다음으로</S.NextStep>
    </S.LayOut>
  );
};

export default Complete;