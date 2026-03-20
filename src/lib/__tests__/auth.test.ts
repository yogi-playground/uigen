// @vitest-environment node
import { describe, test, expect, vi, beforeEach } from "vitest";
import { SignJWT } from "jose";

// Mock server-only so it doesn't throw in test environment
vi.mock("server-only", () => ({}));

// Shared cookie store mock
const cookieStore = {
  set: vi.fn(),
  get: vi.fn(),
  delete: vi.fn(),
};
vi.mock("next/headers", () => ({
  cookies: vi.fn(() => Promise.resolve(cookieStore)),
}));

// Import after mocks are set up
const { createSession, getSession, deleteSession, verifySession } =
  await import("@/lib/auth");

const JWT_SECRET = new TextEncoder().encode("development-secret-key");

async function makeValidToken(
  payload: Record<string, unknown>,
  expiresIn = "7d"
) {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setExpirationTime(expiresIn)
    .setIssuedAt()
    .sign(JWT_SECRET);
}

beforeEach(() => {
  vi.clearAllMocks();
});

// ---------------------------------------------------------------------------
// createSession
// ---------------------------------------------------------------------------
describe("createSession", () => {
  test("sets an httpOnly cookie named auth-token", async () => {
    await createSession("user-1", "user@example.com");

    expect(cookieStore.set).toHaveBeenCalledOnce();
    const [name, , options] = cookieStore.set.mock.calls[0];
    expect(name).toBe("auth-token");
    expect(options.httpOnly).toBe(true);
    expect(options.path).toBe("/");
  });

  test("cookie value is a signed JWT containing userId and email", async () => {
    const { jwtVerify } = await import("jose");

    await createSession("user-1", "user@example.com");

    const token = cookieStore.set.mock.calls[0][1];
    const { payload } = await jwtVerify(token, JWT_SECRET);

    expect(payload.userId).toBe("user-1");
    expect(payload.email).toBe("user@example.com");
  });

  test("cookie expires approximately 7 days from now", async () => {
    await createSession("user-1", "user@example.com");

    const options = cookieStore.set.mock.calls[0][2];
    const sevenDaysMs = 7 * 24 * 60 * 60 * 1000;
    const diff = (options.expires as Date).getTime() - Date.now();

    expect(diff).toBeGreaterThan(sevenDaysMs - 5000);
    expect(diff).toBeLessThanOrEqual(sevenDaysMs);
  });
});

// ---------------------------------------------------------------------------
// getSession
// ---------------------------------------------------------------------------
describe("getSession", () => {
  test("returns null when no cookie is present", async () => {
    cookieStore.get.mockReturnValue(undefined);

    const session = await getSession();

    expect(session).toBeNull();
  });

  test("returns null when cookie value is an empty string", async () => {
    cookieStore.get.mockReturnValue({ value: "" });

    const session = await getSession();

    expect(session).toBeNull();
  });

  test("returns the session payload for a valid token", async () => {
    const token = await makeValidToken({
      userId: "user-1",
      email: "user@example.com",
      expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
    });
    cookieStore.get.mockReturnValue({ value: token });

    const session = await getSession();

    expect(session?.userId).toBe("user-1");
    expect(session?.email).toBe("user@example.com");
  });

  test("returned payload contains expiresAt", async () => {
    const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
    const token = await makeValidToken({ userId: "user-1", email: "user@example.com", expiresAt });
    cookieStore.get.mockReturnValue({ value: token });

    const session = await getSession();

    expect(session?.expiresAt).toBeDefined();
  });

  test("returns null for an expired token", async () => {
    const token = await makeValidToken(
      { userId: "user-1", email: "user@example.com" },
      "-1s"
    );
    cookieStore.get.mockReturnValue({ value: token });

    const session = await getSession();

    expect(session).toBeNull();
  });

  test("returns null for a token signed with a different secret", async () => {
    const wrongSecret = new TextEncoder().encode("wrong-secret");
    const token = await new SignJWT({ userId: "user-1", email: "user@example.com" })
      .setProtectedHeader({ alg: "HS256" })
      .setExpirationTime("7d")
      .setIssuedAt()
      .sign(wrongSecret);
    cookieStore.get.mockReturnValue({ value: token });

    const session = await getSession();

    expect(session).toBeNull();
  });

  test("returns null for a structurally invalid token", async () => {
    cookieStore.get.mockReturnValue({ value: "not.a.valid.jwt" });

    const session = await getSession();

    expect(session).toBeNull();
  });

  test("returns null for a token with only two parts", async () => {
    cookieStore.get.mockReturnValue({ value: "header.payload" });

    const session = await getSession();

    expect(session).toBeNull();
  });
});

// ---------------------------------------------------------------------------
// deleteSession
// ---------------------------------------------------------------------------
describe("deleteSession", () => {
  test("deletes the auth-token cookie", async () => {
    await deleteSession();

    expect(cookieStore.delete).toHaveBeenCalledOnce();
    expect(cookieStore.delete).toHaveBeenCalledWith("auth-token");
  });
});

// ---------------------------------------------------------------------------
// verifySession
// ---------------------------------------------------------------------------
describe("verifySession", () => {
  function makeRequest(token?: string) {
    const { NextRequest } = require("next/server");
    const url = "http://localhost/";
    const req = new NextRequest(url, {
      headers: token ? { cookie: `auth-token=${token}` } : {},
    });
    return req;
  }

  test("returns null when request has no auth cookie", async () => {
    const req = makeRequest();
    const session = await verifySession(req);
    expect(session).toBeNull();
  });

  test("returns session payload for a valid token in the request", async () => {
    const token = await makeValidToken({
      userId: "user-2",
      email: "other@example.com",
      expiresAt: new Date(),
    });
    const req = makeRequest(token);

    const session = await verifySession(req);

    expect(session?.userId).toBe("user-2");
    expect(session?.email).toBe("other@example.com");
  });

  test("returns null for an expired token in the request", async () => {
    const token = await makeValidToken(
      { userId: "user-2", email: "other@example.com" },
      "-1s"
    );
    const req = makeRequest(token);

    const session = await verifySession(req);

    expect(session).toBeNull();
  });

  test("returns null for a tampered token in the request", async () => {
    const req = makeRequest("bad.token.value");

    const session = await verifySession(req);

    expect(session).toBeNull();
  });
});
