import styled from "styled-components";
import ActionBar from "./modules/ActionBar";
import TimeField from "./modules/TimeField";
import { SIZES } from "../global/constants";
import { useSelector } from "react-redux";
import { StoreProps, WorkingHourType } from "../global/types";

// 2번 과제 최상위 설정 페이지
export default function Setting_Page({ hours }: { hours: WorkingHourType[] }) {
  const { isModified } = useSelector((state: StoreProps) => state.workingHour);

  return (
    <PageWrapper $isModified={isModified}>
      {hours.map((hour, index) => {
        return <TimeField name={hour.day} key={index} times={hour.times} />;
      })}
      {isModified && <ActionBar />}
    </PageWrapper>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
const PageWrapper = styled.section<{ $isModified: boolean }>`
  max-width: ${SIZES.MAX_WIDTH_SETTING}px;
  margin: 0 auto ${(props) => (props.$isModified ? 0 : 75)}px;
`;
