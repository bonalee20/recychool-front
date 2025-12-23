import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import LeftPanel from "./components/LeftPanel";
import RightPanel from "./components/RightPanel";
import ReserveMap from "./components/ReserveMap";
import S from "./style";
import MainBanner from "../main/mainbanner/MainBanner";
console.log("🔥 Reserve 페이지 렌더링됨");

// 예약 페이지 조회
const fetchReservePage = async ({ queryKey }) => {
  const [, schoolId, reserveType] = queryKey;

  const res = await fetch(
    `${process.env.REACT_APP_BACKEND_URL}/api/public/schools/${schoolId}/${reserveType.toLowerCase()}`
  );

  if (!res.ok) {
    throw new Error("예약 페이지 조회 실패");
  }

  return res.json();
};

// 학교 좌표 조회
const fetchSchoolCoordinate = async ({ queryKey }) => {
  const [, schoolId] = queryKey;

  const res = await fetch(
    `${process.env.REACT_APP_BACKEND_URL}/api/public/schools/${schoolId}/coordinate`
  );

  if (!res.ok) {
    throw new Error("학교 좌표 조회 실패");
  }

  const result = await res.json();
  return result.data; // ApiResponseDTO의 data만 반환
};

const Reserve = ({ reserveType }) => {
  const { schoolId } = useParams();
  const [selectedDate, setSelectedDate] = useState(null);

  // 예약 페이지 데이터
  const {
    data: reserveResponse,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["reservePage", schoolId, reserveType],
    queryFn: fetchReservePage,
  });

  const reserveData = reserveResponse?.data;

  // 학교 좌표 데이터
  const { data: coord } = useQuery({
    queryKey: ["schoolCoordinate", schoolId],
    queryFn: fetchSchoolCoordinate,
    enabled: !!schoolId,
  });

  if (isLoading) return <div>로딩중...</div>;
  if (isError) return <div>에러 발생</div>;

  return (
    <S.Page>

      <S.Container>
        <S.ContentRow>
          <LeftPanel
            data={reserveData}
            selectedDate={selectedDate}
            onDateSelect={setSelectedDate}
          />

          <RightPanel
            data={reserveData}
            type={reserveType}
            selectedDate={selectedDate}
          />
        </S.ContentRow>

        <S.MapSection>
          {coord && (
            <ReserveMap
              key={`${coord.lat}-${coord.lng}`}
              lat={coord.lat}
              lng={coord.lng}
            />
          )}
        </S.MapSection>
      </S.Container>
    </S.Page>
  );
};

export default Reserve;
