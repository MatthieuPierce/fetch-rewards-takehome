import axios from "axios";

export default async function postUser(postData, setStatus) {
  // set post status to submitting
  setStatus({ submitting: "Submitting User..." });

  try {
    const endpoint = import.meta.env.VITE_FETCH_ENDPOINT;
    const postConfig = {
      withCredentials: false,
    };
    // post user data
    const { status } = await axios.post(endpoint, postData, postConfig);

    // check response status
    if (status === 200) {
      setStatus({
        success:
          "Success creating user! This is where we'd normally laden you with cookies and redirect you to your shiny new landing page!",
      });
      return;
    } else {
      throw new Error("Unexpected response from submitting user");
    }
  } catch (error) {
    // log error
    console.error(error);
    // set post status to error
    setStatus({ error: error.message });
  }
}
