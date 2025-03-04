const url = "https://api.themoviedb.org/3/movie";
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZDJhMzFhY2EzN2M0NjZiNmU3OWRhMGQ3ZDY4NWFiMSIsIm5iZiI6MTc0MTA3MjQwMy42NzIsInN1YiI6IjY3YzZhODEzM2E5NzFkZDJjMGMwNzQ3OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.h5Dn4hPnvJfY1---99DyXv1czeRRhPATvftxRksQaQc"
  }
};

// 🔹 Fetch Movies Function with Debugging
const fetchMovies = async (endpoint) => {
  try {
    console.log(`📡 Fetching ${endpoint}...`);

    const response = await fetch(`${url}/${endpoint}?language=en-US&page=1`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${options?.headers?.Authorization}`
      }
    });

    console.log(`✅ Response Status (${endpoint}):`, response.status);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log(`🎬 ${endpoint} Movies:`, data.results);

    return data.results || [];
  } catch (error) {
    console.error(`🚨 API Error (${endpoint}):`, error.message);
    return [];
  }
};

// 🔹 Fetch Different Categories with Delay to Avoid Rate Limits
export const getNowPlaying = () => fetchMovies("now_playing");
export const getPopular = () => new Promise((resolve) => setTimeout(() => resolve(fetchMovies("popular")), 500));
export const getTopRated = () => new Promise((resolve) => setTimeout(() => resolve(fetchMovies("top_rated")), 1000));
export const getUpcoming = () => new Promise((resolve) => setTimeout(() => resolve(fetchMovies("upcoming")), 1500));
