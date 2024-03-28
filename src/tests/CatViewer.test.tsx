// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { expect, vi } from "vitest";
import { userEventSetup } from "./util/util";
import CatViewer from "../pages/CatViewer";
import { screen, waitFor } from "@testing-library/react";

it("catviewer 페이지 진입 시 로딩 메시지를 확인할 수 있다.", async () => {
  userEventSetup([{ path: "/", jsx: <CatViewer /> }]);

  window.location.href = "/";

  await waitFor(
    () => {
      const loadingMessage = screen.getByText("Fetching", { exact: false });
      expect(loadingMessage).toBeInTheDocument();
      screen.debug();
    },
    { timeout: 1000 }
  );
});

it("catviewer 페이지 최초 로딩 시 30개의 이미지를 불러온다. ", async () => {
  userEventSetup([{ path: "/", jsx: <CatViewer /> }]);

  window.location.href = "/";

  const fetchedImages = await screen.findAllByRole("img");
  // mocking 응답으로 3개만 구현
  expect(fetchedImages.length).equals(3);
  screen.debug();
});
