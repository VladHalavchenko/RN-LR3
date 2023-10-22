import axios from "axios";
export async function searchHero(heroInfo) {
  const baseUrl = "https://superhero-search.p.rapidapi.com/api/";
  const options = {
    headers: {
      "X-RapidAPI-Key": "9b3ff61931msh1b42d77d34e33dap1c29cajsn3d3169e0e2f4",
      "X-RapidAPI-Host": "superhero-search.p.rapidapi.com",
    },
    params: {
      hero: heroInfo,
    },
  };

  const res = await axios.get(baseUrl, options);
  return res.data;
}
