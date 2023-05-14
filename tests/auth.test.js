import request from "supertest";
import app from "../src/app";

describe("GET /isuser/:email", () => {
  it("should not get a client when it does not have access", async () => {
    const res = await request(app).get("/isuser/email-does-not-exist");
    expect(res.statusCode).toEqual(200);
    expect(res.body.ok).toEqual(false);
  });
});

export const getUserToken = async (auth) => {
  const res = await request(app).get(
    "/isuser/britneyblankenship@quotezart.com"
  );
  expect(res.statusCode).toEqual(200);
  expect(res.body.ok).toEqual(true);
  auth.token = res.body.accessToken;
  return auth;
};
