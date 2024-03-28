/* eslint-disable @typescript-eslint/no-unused-vars */
import { http, HttpResponse, HttpHandler } from "msw";

export const handlers: HttpHandler[] = [
  http.get(`https://api.thecatapi.com/v1/images/search`, async () => {
    return HttpResponse.json([
      {
        height: 700,
        width: 523,
        id: "qn",
        url: "https://cdn2.thecatapi.com/images/qn.jpg",
      },
      {
        height: 700,
        width: 523,
        id: "qn",
        url: "https://cdn2.thecatapi.com/images/qn.jpg",
      },
      {
        height: 700,
        width: 523,
        id: "qn",
        url: "https://cdn2.thecatapi.com/images/qn.jpg",
      },
    ]);
  }),
];
