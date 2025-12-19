import React, { useEffect, useState } from 'react';
import S from './style';
import Modal from './modal/Modal';

const Verify = () => {
  const [openModal, setOpenModal] = useState(false);
  const [verificationResult, setVerificationResult] = useState(null);

  const handleClickToOpenVerificate = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleVerificationComplete = (result) => {
    console.log('인증 결과:', result);
    setVerificationResult(result);
    // 인증 완료 후 입력한 사용자 정보 저장
    if (result.userName && result.userPhone && result.userBirthday) {
      // 필요시 여기서 상태 관리나 로컬 스토리지에 저장할 수 있습니다
      console.log('사용자 정보:', {
        userName: result.userName,
        userPhone: result.userPhone,
        userBirthday: result.userBirthday
      });
    }
  };

  useEffect(() => {
    console.log('모달 상태:', openModal);
  }, [openModal]);

  useEffect(() => {
    if (verificationResult) {
      console.log('인증 완료 결과:', verificationResult);
      // 인증 결과를 활용하는 로직을 여기에 추가할 수 있습니다
    }
  }, [verificationResult]);

  return (
    <S.LayOut>
      {openModal && (
        <>
          <S.ModalOverlay onClick={handleCloseModal} />
          <Modal 
            onClose={handleCloseModal} 
            onComplete={handleVerificationComplete}
          />
        </>
      )}
      <S.TextWrap>
        <S.H3>본인확인</S.H3>
        <S.H5>고객님의 본인확인을 진행해주세요.</S.H5>
        <S.H6>리싸이쿨의 서비스 이용을 위해 본인확인이 필요합니다.</S.H6>
      </S.TextWrap>
      <S.TapWrap>
        <S.Tap onClick={handleClickToOpenVerificate}>
          <img src="/assets/images/social-provider/phone.png" alt="phone" />
          문자 인증하기
        </S.Tap>
      </S.TapWrap>
      <S.NextStep>
        완료하기
      </S.NextStep>
    </S.LayOut>
  );
};

export default Verify;