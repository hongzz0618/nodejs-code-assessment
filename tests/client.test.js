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

describe("GET /client/username/:username", () => {
  it("should not get a client when it does not have access", async () => {
    const res = await request(app).get("/client/username/does-not-have-access");
    expect(res.statusCode).toEqual(401);
    expect(res.body).toEqual({ message: "Not allowed" });
  });

  let auth = {};
  beforeAll(async () => await getUserToken(auth));

  it("should get a client by username", async () => {
    const testUsername = "Britney";
    const res = await request(app)
      .get(`/client/username/${testUsername}`)
      .set("Authorization", "bearer " + auth.token);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual(
      expect.objectContaining({
        id: expect.any(String),
        name: testUsername,
        email: expect.any(String),
        role: expect.any(String),
      })
    );
  });

  it("should not get a client for username does not exist", async () => {
    const res = await request(app)
      .get("/client/username/username-does-not-exist")
      .set("Authorization", "bearer " + auth.token);
    expect(res.statusCode).toEqual(404);
    expect(res.body).toEqual({ message: "Not found" });
  });
});

describe("GET /client/policy/:id", () => {
  it("should not get a client when it does not have access", async () => {
    const res = await request(app).get("/client/username/does-not-have-access");
    expect(res.statusCode).toEqual(401);
    expect(res.body).toEqual({ message: "Not allowed" });
  });

  let auth = {};
  beforeAll(async () => await getUserToken(auth));
  const testPolicyNumber = "64cceef9-3a01-49ae-a23b-3761b604800b";

  it("should get a client by policy number", async () => {
    const res = await request(app)
      .get(`/client/policy/${testPolicyNumber}`)
      .set("Authorization", "bearer " + auth.token);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual(
      expect.objectContaining({
        id: expect.any(String),
        name: expect.any(String),
        email: expect.any(String),
        role: expect.any(String),
      })
    );
  });

  it("should not get a client for policy number does not exist", async () => {
    const res = await request(app)
      .get("/client/policy/policy-number-does-not-exist")
      .set("Authorization", "bearer " + auth.token);
    expect(res.statusCode).toEqual(404);
    expect(res.body).toEqual({ message: "Not found" });
  });

  it("should not get a client for users of user permissions", async () => {
    let currAuth = {};
    await getUserToken(currAuth, "merrillblankenship@quotezart.com");
    const res = await request(app)
      .get(`/client/policy/${testPolicyNumber}`)
      .set("Authorization", "bearer " + currAuth.token);
    expect(res.statusCode).toEqual(401);
    expect(res.body).toEqual({ message: "Not allowed" });
  });
});
