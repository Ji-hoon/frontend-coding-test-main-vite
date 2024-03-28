// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { expect, vi } from "vitest";
import { userEventSetup } from "./util/util";
import CatViewer from "../pages/CatViewer";
import { screen, waitFor } from "@testing-library/react";

it("catviewer 페이지 진입 시 로딩 메시지를 확인할 수 있다.", async () => {
  userEventSetup([{ path: "/", jsx: <CatViewer /> }]);

  await waitFor(
    () => {
      const loadingMessage = screen.getByText("Fetching", { exact: false });
      expect(loadingMessage).toBeInTheDocument();
      //screen.debug();
    },
    { timeout: 1000 }
  );
});
