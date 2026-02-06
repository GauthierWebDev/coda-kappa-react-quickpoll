import { renderHook, act } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { useToggle } from "./useToggle";

describe("useToggle", () => {
  it("should contains initial value (true)", () => {
    const { result } = renderHook(() => useToggle(true));

    expect(result.current.value).toBe(true);
  });

  it("should contains initial value (false)", () => {
    const { result } = renderHook(() => useToggle(false));

    expect(result.current.value).toBe(false);
  });

  it("should switch value (true -> false)", () => {
    const { result } = renderHook(() => useToggle(true));

    act(() => {
      result.current.toggle();
    });

    expect(result.current.value).toBe(false);
  });

  it("should contains initial value (false -> true)", () => {
    const { result } = renderHook(() => useToggle(false));

    act(() => {
      result.current.toggle();
    });

    expect(result.current.value).toBe(true);
  });
});
