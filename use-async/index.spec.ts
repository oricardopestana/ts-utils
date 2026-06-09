import { describe, it, expect } from "vitest";
import { useAsync } from "./index";

describe("useAsync", () => {
  it("should return [data, null] when the promise resolves", async () => {
    const [data, error] = await useAsync(() => Promise.resolve(42));
    expect(data).toBe(42);
    expect(error).toBeNull();
  });

  it("should return [null, reason] when the promise rejects with an Error", async () => {
    const [data, error] = await useAsync(() => Promise.reject(new Error("Something went wrong")));
    expect(data).toBeNull();
    expect(error).toBeInstanceOf(Error);
    expect((error as Error).message).toBe("Something went wrong");
  });

  it("should return [null, reason] when the promise rejects with a string", async () => {
    const [data, error] = await useAsync(() => Promise.reject("Oops!"));
    expect(data).toBeNull();
    expect(error).toBe("Oops!");
  });

  it("should return [null, reason] when the promise rejects with a number", async () => {
    const [data, error] = await useAsync(() => Promise.reject(404));
    expect(data).toBeNull();
    expect(error).toBe(404);
  });

  it("should handle a callback that throws synchronously", async () => {
    const [data, error] = await useAsync(() => {
      throw new Error("Sync throw");
    });
    expect(data).toBeNull();
    expect(error).toBeInstanceOf(Error);
    expect((error as Error).message).toBe("Sync throw");
  });

  it("should handle resolved undefined", async () => {
    const [data, error] = await useAsync(() => Promise.resolve(undefined));
    expect(data).toBeUndefined();
    expect(error).toBeNull();
  });

  it("should handle resolved null", async () => {
    const [data, error] = await useAsync(() => Promise.resolve(null));
    expect(data).toBeNull();
    expect(error).toBeNull();
  });

  it("should handle an empty async function", async () => {
    const [data, error] = await useAsync(async () => {});
    expect(data).toBeUndefined();
    expect(error).toBeNull();
  });
});
