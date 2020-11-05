const API_KEY = "<c6966e1f5dc5a07cc97eb011046d627f>";

export default {
  fetchTrending: `/trending/all/?api_key=${API_KEY}&language=en-US`,
  fetchTopRAted: `/movie/top-rated/?api_key=${API_KEY}&language-en=US`,
  fetchActionMovies: `/discover/movie/?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie/?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie/?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie/?api_key=${API_KEY}&with_genres=10749`,
  fetchMyesteryMovies: `/discover/movie/?api_key=${API_KEY}&with_genres=9648`,
  fetchSciFiMovies: `/discover/movie/?api_key=${API_KEY}&with_genres=878`,
  fetchWestern: `/discover/movie/?api_key=${API_KEY}&with_genres=37`,
  fetchAnimation: `/discover/movie/?api_key=${API_KEY}&with_genres=16`,
  fetchTv: `/discover/movie/?api_key=${API_KEY}&with_genres=10770`,
};
