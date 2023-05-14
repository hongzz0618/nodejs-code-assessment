import request from "supertest";
import app from "../src/app";
import { getUserToken } from "./auth.test.js";

describe("GET /client/:id", () => {
  it("should not get a client when it does not have access", async () => {
    const res = await request(app).get("/client/does-not-have-access");
    expect(res.statusCode).toEqual(401);
    expect(res.body).toEqual({ message: "Not allowed" });
  });

  let auth = {};
  beforeAll(async () => await getUserToken(auth));

  it("should get a client by id", async () => {
    const testUserId = "a0ece5db-cd14-4f21-812f-966633e7be86";
    const res = await request(app)
      .get(`/client/${testUserId}`)
      .set("Authorization", "bearer " + auth.token);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual(
      expect.objectContaining({
        id: testUserId,
        name: expect.any(String),
        email: expect.any(String),
        role: expect.any(String),
      })
    );
  });

  it("should not get a client for id does not exist", async () => {
    const res = await request(app)
      .get("/client/id-does-not-exist")
      .set("Authorization", "bearer " + auth.token);
    expect(res.statusCode).toEqual(404);
    expect(res.body).toEqual({ message: "Not found" });
  });
});
