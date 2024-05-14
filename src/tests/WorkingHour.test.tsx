// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { expect } from "vitest";
import { userEventSetup } from "./util/util";
import { screen } from "@testing-library/react";
import WorkingHours from "../pages/WorkingHours";
import { mockLoaderData } from "./mocks/loaderData";

it("workingHour 페이지 진입 시 요일 정보를 확인할 수 있다.", async () => {
  userEventSetup([{ path: "/", jsx: <WorkingHours /> }], mockLoaderData);

  window.location.href = "/";

  const loadingMessage = await screen.findAllByRole("heading", {
    name: /day/i,
  });
  expect(loadingMessage.length).toEqual(7);
  screen.debug();
});
