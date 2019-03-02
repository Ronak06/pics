import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 4b1714d67a99316c2cd20fac031890c0d482639eca452635349d77c223c6ef1e"
  }
});
