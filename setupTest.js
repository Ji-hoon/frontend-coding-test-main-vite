import "@testing-library/jest-dom";
import "@testing-library/react";

import { cleanup } from "@testing-library/react";
import { beforeEach, beforeAll, afterEach, afterAll } from "vitest";
// import { server } from "./src/tests/mocks/server";

beforeAll(() => {
  // server.listen();
});

beforeEach(() => {
  cleanup();
});

afterEach(() => {
  //server.resetHandlers();

  Object.defineProperty(window, "location", {
    value: {
      origin: "http://localhost:3000", // default port는 3000
      pathname: "/",
    },
  });
});

afterAll(() => {
  //server.close();
});
