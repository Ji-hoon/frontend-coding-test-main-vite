import ReactDOM from "react-dom";
import { PortalProps } from "../../global/types";
import styled from "styled-components";

const DropdownPortal = ({ children }: PortalProps) => {
  return ReactDOM.createPortal(
    children,
    document.getElementById("dropdown") as HTMLElement
  );
};

export default function Dropdown({ children }: { children?: React.ReactNode }) {
  //TODO: inputTime 값을 상태 값으로 가져옴

  const isEnabled = false; //TODO : 추후 전역 상태 값으로 치환

  return (
    <DropdownPortal>
      <DropdownContainer $enabled={isEnabled}>
        <>{children}</>
      </DropdownContainer>
    </DropdownPortal>
  );
}

const DropdownContainer = styled.div<{
  $enabled: boolean;
}>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: ${(props) => (props.$enabled ? 1 : 0)};

  pointer-events: ${(props) => (props.$enabled ? "auto" : "none")};
`;
