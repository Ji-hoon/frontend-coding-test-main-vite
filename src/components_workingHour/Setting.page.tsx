import styled from "styled-components";
import ActionBar from "./modules/ActionBar";
import TimeField from "./modules/Field";
import { SIZES } from "../global/constants";

// 2번 과제 최상위 설정 페이지
export default function Setting_Page() {
  return (
    <PageWrapper>
      <TimeField name="Sunday" />
      <TimeField name="Monday" />
      <TimeField name="Tuesday" />
      <TimeField name="Wednesday" />
      <TimeField name="Thursday" />
      <TimeField name="Friday" />
      <TimeField name="Saturday" />
      <ActionBar />
    </PageWrapper>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
const PageWrapper = styled.section`
  max-width: ${SIZES.MAX_WIDTH_SETTING}px;
  margin: 0 auto;
`;
