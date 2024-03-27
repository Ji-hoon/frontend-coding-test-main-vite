import styled from "styled-components";
import ActionBar from "./modules/ActionBar";
import TimeField from "./modules/TimeField";
import { SIZES } from "../global/constants";
import { useSelector } from "react-redux";
import { StoreProps } from "../global/types";

// 2번 과제 최상위 설정 페이지
export default function Setting_Page() {
  const { hours, isModified } = useSelector(
    (state: StoreProps) => state.workingHour
  );

  return (
    <PageWrapper>
      {hours.map((hour, index) => {
        return <TimeField name={hour.day} key={index} times={hour.times} />;
      })}
      {isModified && <ActionBar />}
    </PageWrapper>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
const PageWrapper = styled.section`
  max-width: ${SIZES.MAX_WIDTH_SETTING}px;
  margin: 0 auto;
`;
