import axios from "axios";

export const ApiUrl = "https://serverkurdsong.liara.run";

async function resolve(promise) {
  const resolved = {
    data: null,
    error: null,
  };

  try {
    resolved.data = await promise;
  } catch (e) {
    resolved.error = e;
  }

  return resolved;
}

// USER API _________________________________________________________________________
// __________________________________________________________________________________

async function getUserAll() {
  return await resolve(
    axios.get(`${ApiUrl}/author`).then((res) => res.data.data)
  );
}

async function getUserOne(id) {
  return await resolve(
    axios.get(`${ApiUrl}/author/${id}`).then((res) => res.data.data)
  );
}

async function getUserEmail(email) {
  return await resolve(
    await axios.get(`${ApiUrl}/author/email/${email}`).then((res) => res.data)
  );
}

async function getUserToken(email) {
  return await resolve(
    await axios.get(`${ApiUrl}/author/token/${email}`).then((res) => res.data)
  );
}

// SONG API _________________________________________________________________________
// __________________________________________________________________________________

async function getSongAll() {
  return await resolve(
    axios.get(`${ApiUrl}/song/`).then((res) => res.data.data)
  );
}

async function getSongOne(id) {
  return await resolve(
    axios.get(`${ApiUrl}/song/${id}`).then((res) => res.data.data)
  );
}

// SINGER API _________________________________________________________________________
// __________________________________________________________________________________

async function getSingerAll() {
  return await resolve(
    axios.get(`${ApiUrl}/singer/`).then((res) => res.data.data)
  );
}

async function getSingerOne(id) {
  return await resolve(
    axios.get(`${ApiUrl}/singer/${id}`).then((res) => res.data.data)
  );
}

// PLAYLIST API _________________________________________________________________________
// __________________________________________________________________________________

async function getPlaylistAll() {
  return await resolve(
    axios.get(`${ApiUrl}/playlist/`).then((res) => res.data.data)
  );
}

async function getPlaylistOne(id) {
  return await resolve(
    axios.get(`${ApiUrl}/playlist/${id}`).then((res) => res.data.data)
  );
}

// ALBUM API _________________________________________________________________________
// __________________________________________________________________________________

async function getAlbumAll() {
  return await resolve(
    axios.get(`${ApiUrl}/album/`).then((res) => res.data.data)
  );
}

async function getAlbumOne(id) {
  return await resolve(
    axios.get(`${ApiUrl}/album/${id}`).then((res) => res.data.data)
  );
}

// CATEGORY API _________________________________________________________________________
// __________________________________________________________________________________

async function getCategoryAll() {
  return await resolve(
    axios.get(`${ApiUrl}/category/`).then((res) => res.data.data)
  );
}

async function getCategoryOne(id) {
  return await resolve(
    axios.get(`${ApiUrl}/category/${id}`).then((res) => res.data.data)
  );
}

// EXPORT ___________________________________________________________________________
// __________________________________________________________________________________

export {
  getUserAll,
  getSongAll,
  getSongOne,
  getSingerAll,
  getSingerOne,
  getPlaylistAll,
  getPlaylistOne,
  getAlbumAll,
  getAlbumOne,
  getCategoryAll,
  getCategoryOne,
};
