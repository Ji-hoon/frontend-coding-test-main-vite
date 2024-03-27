import ReactDOM from "react-dom";
import { PortalProps } from "../../global/types";
import styled from "styled-components";
import { useDropdown } from "../hooks/useDropdown";

const DropdownPortal = ({ children }: PortalProps) => {
  return ReactDOM.createPortal(
    children,
    document.getElementById("dropdown") as HTMLElement
  );
};

export default function Dropdown({
  children,
  isEnabled,
}: {
  children?: React.ReactNode;
  isEnabled: boolean;
}) {
  const { clickDropdownBackdrop } = useDropdown();

  return (
    <DropdownPortal>
      <DropdownContainer $enabled={isEnabled}>
        <div className="backdrop" onClick={clickDropdownBackdrop} />
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

  & .backdrop {
    position: absolute;
    width: 100%;
    height: 100%;
  }
`;
