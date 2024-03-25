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

  transition: opacity 350ms cubic-bezier(0.52, 0.13, 0.33, 1.05);
`;
