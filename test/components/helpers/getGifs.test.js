import { getGifs } from "../../../src/helpers/getGifs";

describe("Pruebas en getGifs()", () => {
  test("debe retonar un arreglo de gifs", async () => {
    const gifs = await getGifs("dbz");

    expect(gifs[0]).toEqual({
      id: expect.any(String),
      title: expect.any(String),
      url: expect.any(String),
      username: expect.any(String),
    });
  });
});
