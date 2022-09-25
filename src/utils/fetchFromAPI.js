import axios from 'axios'

const BASE_URL = 'https://youtube-v31.p.rapidapi.com'

const options = {
    // method: 'GET', dont need for this case
    // url: BASE_URL, used on fetchFromAPI function
    params: {
        //dont need others
      maxResults: '50'
    },
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };

  // /baseUrl/getVideos   (example)

export const fetchFromAPI = async (url) => { //async functions return a promise
    //instead of response, we use { data }
    const { data } = await axios.get(`${BASE_URL}/${url}`,
    options)

    return data;
}