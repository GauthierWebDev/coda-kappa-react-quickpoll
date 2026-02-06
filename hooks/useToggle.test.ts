import { renderHook } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { useToggle } from "./useToggle";

describe("useToggle", () => {
  it("should contains initial value (true)", () => {
    const { result } = renderHook(() => useToggle(true));

    expect(result.current.value).toBe(true);
  });
});
