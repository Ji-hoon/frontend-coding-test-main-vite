import styled from "styled-components";

export default function Loading({ $init }: { $init: boolean }) {
  return (
    <LoadingWrapper>
      Fetching {$init ? "lovely" : "more"} cats...
    </LoadingWrapper>
  );
}

const LoadingWrapper = styled.div`
  padding: 24px;
`;
