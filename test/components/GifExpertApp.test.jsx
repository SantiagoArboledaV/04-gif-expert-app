import { render, screen } from "@testing-library/react";
import GifExpertApp from "../../src/GifExpertApp";

describe("pruebas en <GifExpertApp />", () => {
  test("debe añadir una categoría única", async () => {
    await waitFor(() =>
      expect(result.current.images.length).toBeGreaterThan(0)
    );
    render(<GifExpertApp category="dbz" />);
  });
});
