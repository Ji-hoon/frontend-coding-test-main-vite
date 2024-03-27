import styled from "styled-components";
import ScaleLoader from "react-spinners/ScaleLoader";
import { COLORS } from "../../global/constants";

export default function Loading({ $init }: { $init: boolean }) {
  return (
    <LoadingWrapper>
      <ScaleLoader
        color={COLORS.BRAND_DEFAULT}
        height={15}
        aria-label="Loading Spinner"
      />
      <p>Fetching {$init ? "lovely" : "more"} cats...</p>
    </LoadingWrapper>
  );
}

const LoadingWrapper = styled.div`
  padding: 24px;

  & p {
    animation: blink 3000ms linear infinite;

    @keyframes blink {
      0% {
        opacity: 1;
      }
      50% {
        opacity: 0.4;
      }
      100% {
        opacity: 1;
      }
    }
  }
`;
