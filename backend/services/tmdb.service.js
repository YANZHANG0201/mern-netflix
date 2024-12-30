import axios from "axios";
import { ENV_VARS } from "../config/envVars.js";

export const fetchFromTMDB = async (url) => {
  const options = {
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YTBiYTkxYTAyYzFhNjUyY2M3N2YxYTY1MTVhM2U0MSIsIm5iZiI6MTczNDc2Mjc5NC41MTAwMDAyLCJzdWIiOiI2NzY2NjEyYTc3NGFjNWEyODU3NGI1MTgiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.Ip6i0qs_ENwfekYkNqe8nJVuFW-BXguHnRQGzGtEcLI",
    },
  };

  try {
    const response = await axios.get(url, options);

    if (response.status !== 200) {
      throw new Error("Failed to fetch data from TMDB: " + response.statusText);
    }

    return response.data;
  } catch (error) {
    console.error("Error in fetchFromTMDBss:", error.message);
    throw error;
  }
};
