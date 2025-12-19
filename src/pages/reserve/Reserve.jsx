import React, { useState } from "react";
import S from "./style";
import ReservationCalendar from "./components/ReservationCalendar";

const Reserve = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  return (
    <S.Page>
      <S.Grid>
        <S.LeftPanel>
          <S.LeftContent>
            <S.Title>영월초등학교</S.Title>

            <S.ImageBox />

            <S.CalendarBox>
              <ReservationCalendar
                startDate={startDate}
                endDate={endDate}
                setStartDate={setStartDate}
                setEndDate={setEndDate}
              />
            </S.CalendarBox>

          </S.LeftContent>
        </S.LeftPanel>

        <S.RightPanel>
          <S.InfoRow>
            <span>도로명 주소</span>
            <p>경기도 포천시 영중면 영평로1429번길5</p>
          </S.InfoRow>

          <S.InfoRow>
            <span>면적</span>
            <p>4993㎡</p>
          </S.InfoRow>

          <S.InfoRow>
            <span>연락처</span>
            <p>031-539-0033</p>
          </S.InfoRow>

          <S.InfoRow>
            <span>사용료</span>
            <p>50,000원/월</p>
          </S.InfoRow>

          <S.InfoRow>
            <span>이용 시간</span>
            <p>18:00 ~ 08:00(익일)</p>
          </S.InfoRow>

          <S.InfoRow $last>
            <span>날짜</span>
            <p>
              {startDate && endDate
                ? `${startDate.format("MM월 DD일")} ~ ${endDate.format(
                    "MM월 DD일"
                  )}`
                : "날짜를 선택하세요"}
            </p>
          </S.InfoRow>

          <S.ReserveButton>예약하기</S.ReserveButton>
        </S.RightPanel>

        <S.MapSection />
      </S.Grid>
    </S.Page>
  );
};

export default Reserve;
