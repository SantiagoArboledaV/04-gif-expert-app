import { render, screen } from "@testing-library/react";
import GridItem from "../../src/components/GridItem";

describe("Pruebas en <GifItem />", () => {
  const title = "Saitama";
  const url = "https://one-punch.com/saitama.jpg";

  test("debe de mostrar la imagen con el URL y el ALT indicado", () => {
    render(<GridItem title={title} url={url}></GridItem>);

    const { src, alt } = screen.getByRole("img");
  });

  test("debe de mostrar el título en el componente", () => {
    render(<GridItem title={title} url={url}></GridItem>);

    expect(screen.getByText(title)).toBeTruthy();
  });
});
