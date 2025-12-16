import styled from "styled-components";
import {
  flexCenterRow,
  h2Bold
} from "../../styles/common";

const S = {};


S.Page = styled.div`
  width: 100%;
`;

S.Grid = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  column-gap: 40px;
`;

S.LeftPanel = styled.div`
  grid-column: 1 / span 5;
`;

S.LeftContent = styled.div`
  display: flex;
  flex-direction: column;
`;

S.RightPanel = styled.div`
  grid-column: 7 / span 4;
  margin-top: 60px;
`;

S.MapSection = styled.div`
  grid-column: 1 / 11;
  margin-top: 80px;
  height: 420px;
  background-color: ${({ theme }) => theme.PALETTE.neutral.gray.light};
  border-radius: 12px;
`;

S.Title = styled.h2`
  ${h2Bold};
  margin-bottom: 16px;
  color: ${({ theme }) => theme.PALETTE.neutral.black.main};
`;

S.ImageBox = styled.div`
  width: 100%;
  height: 340px;
  background-color: ${({ theme }) => theme.PALETTE.neutral.gray.light};
  border-radius: 12px;
  margin-bottom: 32px;
`;

S.CalendarBox = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.PALETTE.primary.green.light};
  border-radius: 12px;
  padding: 12px;         
  box-sizing: border-box;
`;

S.InfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${({ $last }) => ($last ? "40px" : "24px")};

  span {
    font-size: ${({ theme }) => theme.FONT_SIZE.h5};
    font-weight: ${({ theme }) => theme.FONT_WEIGHT.medium};
    color: ${({ theme }) => theme.PALETTE.neutral.gray.main};
    min-width: 80px;
    line-height: 3;
  }

  p {
    font-size: ${({ theme }) => theme.FONT_SIZE.h5};
    font-weight: ${({ theme }) => theme.FONT_WEIGHT.light};
    color: ${({ theme }) => theme.PALETTE.neutral.black.main};
    margin: 0;
    text-align: right;
    flex: 1;
    line-height: 3;
  }
`;

S.ReserveButton = styled.button`
  ${flexCenterRow};
  width: 100%;
  height: 48px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.PALETTE.primary.green.main};
  color: ${({ theme }) => theme.PALETTE.neutral.white.main};
  font-size: ${({ theme }) => theme.FONT_SIZE.h5};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};

  &:hover {
    opacity: 0.9;
  }

  &:disabled {
    background-color: ${({ theme }) => theme.PALETTE.neutral.gray.light};
    color: ${({ theme }) => theme.PALETTE.neutral.gray.dark};
    cursor: not-allowed;
  }
`;

export default S;
