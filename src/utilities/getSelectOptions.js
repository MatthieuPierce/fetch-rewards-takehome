import axios from "axios";

export default async function getSelectOptions() {
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
