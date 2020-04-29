
import axios from "axios";

const KEY = 'AIzaSyBjSPVJyNEIY2_pA078inR4FBsOtqKM2Uc';

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: "snippet",
        maxResults: 5,
        type: 'video',
        key: KEY
      }
  });


  


