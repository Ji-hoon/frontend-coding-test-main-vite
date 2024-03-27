import ReactDOM from "react-dom";
import { PortalProps } from "../../global/types";

export default function Dropdown({ children }: { children?: React.ReactNode }) {
  //TODO: inputTime 값을 상태 값으로 가져옴

  const DropdownPortal = ({ children }: PortalProps) => {
    return ReactDOM.createPortal(
      children,
      document.getElementById("dropdown") as HTMLElement
    );
  };

  return (
    <DropdownPortal>
      <>{children}</>
    </DropdownPortal>
  );
}
