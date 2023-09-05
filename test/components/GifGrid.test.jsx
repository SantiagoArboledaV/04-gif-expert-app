import { fireEvent, render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock("../../src/hooks/useFetchGifs");

describe("pruebas en <GifGrid />", () => {
  const category = "Messi";

  test("debe de mostrar el loading inicialmente", () => {
    useFetchGifs.mockReturnValue({
      images: [],
      loading: true,
    });

    render(<GifGrid category={category} />);
    expect(screen.getByText("Cargando...")).toBeTruthy();
  });

  test("debe mostrar items cuando se cargan las imágenes fetch gif", () => {
    const gifs = [
      {
        id: 1,
        title: "Milagrosa",
        url: "https://queenofworld.png",
      },
      {
        id: 2,
        title: "Tronexpaolo",
        url: "https://troonex.png",
      },
    ];
    useFetchGifs.mockReturnValue({
      images: gifs,
      loading: true,
    });

    render(<GifGrid category={category} />);

    expect(screen.getAllByRole("img").length).toBe(gifs.length);
  });
});
