import axios from "axios";

// fetch field options from fetch rewards
export default async function fetchSelectOptions() {
  const endpoint = import.meta.env.VITE_FETCH_ENDPOINT;
  const options = {
    withCredentials: false,
  };
  try {
    const { data } = await axios.get(endpoint, options);
    return data;
  } catch (error) {
    return { error: error };
  }
}
