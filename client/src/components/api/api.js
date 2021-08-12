import youtubeSearch from "simple-youtube-api";

const API_KEY = "AIzaSyAB2oAFx4da4hxO7XGSXF_M2j-9W0Wj4XA";

export const getPopularList = async () => {
  const ob = new youtubeSearch(API_KEY);

  var data = await ob
    .searchVideos("tseries+bollywood+songs+latest", 10)
    .catch((e) => {
      console.log(e);
    });

  return await data;
};

export const getBollywoodLongSongs = async () => {
  const ob = new youtubeSearch(API_KEY);

  var data = await ob
    .searchVideos("hindi bollywood songs 2019", 10)
    .catch((e) => {
      console.log(e);
    });

  return await data;
};

export const getHollywoodSongs = async () => {
  const ob = new youtubeSearch(API_KEY);

  var data = await ob.searchVideos("hollywood songs latest", 10).catch((e) => {
    console.log(e);
  });

  return await data;
};

export const getGhazalList = async () => {
  const ob = new youtubeSearch(API_KEY);

  var data = await ob.searchVideos("popular ghazals", 10).catch((e) => {
    console.log(e);
  });

  return await data;
};

export const getSearchData = async (query) => {
  const ob = new youtubeSearch(API_KEY);

  var data = await ob.searchVideos(query + " song", 12).catch((e) => {
    console.log(e);
  });

  return await data;
};
