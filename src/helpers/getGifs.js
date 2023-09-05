const API_KEY = "T3Ttg1Wp7uQ8xsb4eDrthAY5L7rh1GWJ";
const limit = 6;

export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${category}&limit=${limit}`;
  const resp = await fetch(url);

  const { data } = await resp.json();

  const gifs = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
    username: img.username,
  }));

  return gifs;
};
