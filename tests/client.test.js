import request from "supertest";
import app from "../src/app";

describe("Client Routes", () => {
  it("should get a client by id", async () => {
    const res = await request(app).get(
      "/client/a0ece5db-cd14-4f21-812f-966633e7be86"
    );
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual(
      expect.objectContaining({
        id: "a0ece5db-cd14-4f21-812f-966633e7be86",
        name: expect.any(String),
        email: expect.any(String),
        role: expect.any(String),
      })
    );
  });

  it("should not get a client for id does not exist", async () => {
    const res = await request(app).get("/client/id-does-not-exist");
    expect(res.statusCode).toEqual(404);
    expect(res.body).toEqual({ message: "Not found" });
  });
});
