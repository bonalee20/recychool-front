import React, { useState } from "react";
import S from "./style";
import EditableRow from "./EditableRow";
import Password from "./Password";

const MyPage = () => {
  const [phone, setPhone] = useState("");
  const [editingField, setEditingField] = useState(null);

  // 비밀번호 전용 상태
  const [currentPw, setCurrentPw] = useState("");
  const [newPw, setNewPw] = useState("");
  const [confirmPw, setConfirmPw] = useState("");

  return (
    <S.All>
      <S.Head>계정관리</S.Head>

      <S.MyPage>
        <S.Title>정보 수정</S.Title>

        <S.Content>
          <S.Row>
            <S.Label>이름</S.Label>
            <S.ReadOnlyBox>홍길동</S.ReadOnlyBox>
          </S.Row>

          <S.Row>
            <S.Label>생년월일</S.Label>
            <S.ReadOnlyBox>2025.02.01</S.ReadOnlyBox>
          </S.Row>

          <S.Row>
            <S.Label>본인 확인 이메일</S.Label>
            <S.ReadOnlyBox>gk1234@gmail.com</S.ReadOnlyBox>
          </S.Row>

          {/* 전화번호 */}
          <EditableRow
            fieldKey="phone"
            label="전화번호"
            placeholder="휴대폰 번호 ‘-’ 제외하고 입력"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            editingField={editingField}
            setEditingField={setEditingField}
          />

          {/* 비밀번호 */}
          <Password
            editingField={editingField}
            setEditingField={setEditingField}
            currentPw={currentPw}
            newPw={newPw}
            confirmPw={confirmPw}
            setCurrentPw={setCurrentPw}
            setNewPw={setNewPw}
            setConfirmPw={setConfirmPw}
          />

          <S.SubmitBtn>완료하기</S.SubmitBtn>
        </S.Content>
      </S.MyPage>
    </S.All>
  );
};

export default MyPage;
