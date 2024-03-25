import styled from "styled-components";

export default function ImageViewerBackdrop() {
  return <Backdrop className="backdrop" />;
}

const Backdrop = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;

  background-color: #fff;
  opacity: 0;
`;
