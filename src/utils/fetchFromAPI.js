import axios from "axios";
export const BASE_URL = "https://youtube-v31.p.rapidapi.com";
const options = {
  params: {
    maxResults: 50,
  },
  headers: {
    "X-RapidAPI-Key": "5a21499077mshe7438abdea803d2p123a2bjsn9af7c7de8f82",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const fetchFromAPI = async (url) =>{
    const {data} = await axios.get(`${BASE_URL}/${url}`, options);
    return data;  
}