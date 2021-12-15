const moodleAPI = async (target, params) => {
  let url = new URL(target);
  url.search = new URLSearchParams(params).toString();

  let response = await fetch(url);
  let responseJSON = await response.json();

  return responseJSON;
};

export default moodleAPI;
