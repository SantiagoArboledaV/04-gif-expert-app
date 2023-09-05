import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../../src/hooks/useFetchGifs";

describe("Pruebas en hook useFetchGifs", () => {
  test("debe de regresar el estado iniciial", async () => {
    const { result } = renderHook(() => useFetchGifs("dbz"));

    await waitFor(() =>
      expect(result.current.images.length).toBeGreaterThan(0)
    );

    const { images, loading } = result.current;

    expect(images.length).toBeGreaterThan(0);
    expect(loading).toBeFalsy();
  });
});
