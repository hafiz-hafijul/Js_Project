import axios from 'axios';

const instance = axios.create({
  baseURl: "https://www.themoviedb.org/",
});


export default instance;