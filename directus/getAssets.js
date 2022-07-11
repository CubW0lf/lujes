const url = "https://api.lujes.vincentcottalorda.me";

const getAssetURL = (id) => {
  if (!id) return null;
  return `${url}/assets/${id}`;
};

export default getAssetURL;
