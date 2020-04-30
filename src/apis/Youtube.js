
import axios from "axios";

Const KEY = 'Find in google.com account';

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: "snippet",
        maxResults: 5,
        type: 'video',
        key: KEY
      }
  }); 


  


