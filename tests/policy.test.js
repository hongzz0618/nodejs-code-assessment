import request from "supertest";
import app from "../src/app";
import { getUserToken } from "./auth.test.js";

describe("GET /policy/username/:username", () => {
  it("should not get a policy when it does not have access", async () => {
    const res = await request(app).get("/policy/username/does-not-have-access");
    expect(res.statusCode).toEqual(401);
    expect(res.body).toEqual({ message: "Not allowed" });
  });

  let auth = {};
  beforeAll(async () => await getUserToken(auth));

  it("should get a policy by username", async () => {
    const testUsername = "britney";
    const res = await request(app)
      .get(`/policy/username/${testUsername}`)
      .set("Authorization", "bearer " + auth.token);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          id: expect.any(String),
          amountInsured: expect.any(Number),
          email: expect.any(String),
          inceptionDate: expect.any(String),
          installmentPayment: expect.any(Boolean),
          clientId: expect.any(String),
        }),
      ])
    );
  });

  it("should not get a policy for username does not exist", async () => {
    const res = await request(app)
      .get("/policy/username/username-does-not-exist")
      .set("Authorization", "bearer " + auth.token);
    expect(res.statusCode).toEqual(404);
    expect(res.body).toEqual({ message: "Not found" });
  });
});
