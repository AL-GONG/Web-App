import { rest } from "msw";
import studyHandler from "./study";
import sessionHandler from "./session";

const baseURL = process.env.REACT_APP_SERVER_BASE_URL;

export const handlers = [
  ...studyHandler,
  ...sessionHandler,
  rest.get(baseURL + "/problem/list/:sessionId", (req, res, ctx) => {
    return res(
      ctx.json({
        status: 200,
        message: "SUCCESS",
        data: [
          {
            id: "p1",
            number: "92342",
            name: "양궁 대회",
            platform: "programmers",
          },
          {
            id: "p2",
            number: "92343",
            name: "양과 늑대",
            platform: "programmers",
          },
          {
            id: "p3",
            number: "92344",
            name: "파괴되지 않은 건물",
            platform: "programmers",
          },
          {
            id: "p4",
            number: "1516",
            name: "게임 개발",
            platform: "boj",
          },
        ],
      })
    );
  }),
  rest.get(baseURL + "/solution/list/:problemId", (req, res, ctx) => {
    const getRandomBoolean = () => {
      let num = Math.random() * 2;
      return Boolean(Math.floor(num) % 2);
    };

    return res(
      ctx.delay(2500),
      ctx.json({
        status: 200,
        message: "SUCCESS",
        data: [
          {
            name: "woong-jae",
            imageUrl: "https://avatars.githubusercontent.com/u/33976823?v=4",
            solve: getRandomBoolean(),
          },
          {
            name: "Kingdonggyu",
            imageUrl: "https://avatars.githubusercontent.com/u/33220404?v=4",
            solve: getRandomBoolean(),
          },
          {
            name: "SeongukBaek",
            imageUrl: "https://avatars.githubusercontent.com/u/33208303?v=4",
            solve: getRandomBoolean(),
          },
          {
            name: "Go-Jaecheol",
            imageUrl: "https://avatars.githubusercontent.com/u/33208246?v=4",
            solve: getRandomBoolean(),
          },
        ],
      })
    );
  }),
];
