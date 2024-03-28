import "@testing-library/jest-dom";
import "@testing-library/react";

import { cleanup } from "@testing-library/react";
import { beforeEach, beforeAll, afterEach, afterAll, vi } from "vitest";
import { server } from "./src/tests/mocks/server";

beforeAll(() => {
  server.listen();
});

beforeEach(() => {
  cleanup();

  // TODO : 임시로 null로 전환한 IntersectionObserver를 동작하게끔 수정
  const mockIntersectionObserver = vi.fn();
  mockIntersectionObserver.mockReturnValue({
    observe: () => null,
    unobserve: () => null,
    disconnect: () => null,
  });
  window.IntersectionObserver = mockIntersectionObserver;
});

afterEach(() => {
  server.resetHandlers();

  Object.defineProperty(window, "location", {
    value: {
      origin: "http://localhost:3000", // default port는 3000
      pathname: "/",
    },
  });
});

afterAll(() => {
  server.close();
});
