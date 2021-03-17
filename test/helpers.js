const app = require("../src/server");
const supertest = require("supertest");
const api = supertest(app);

const Ad = require("../src/models/ads");


const initialAds = [
  {
    title: "First ad helper",
    description: "Desc. one",
  },
  {
    title: "Second ad helper",
    description: "Desc. two",
  },
  {
    title: "Third ad helper",
    description: "Desc. three",
  }
];

const nonExistingId = async () => {
  const ad = new Ad({ title: "willremovethissoon", description: "asdf" });
  await ad.save();
  await ad.remove();

  return ad._id.toString();
};

const adsInDb = async () => {
  const ads = await Ad.find({});
  return ads.map((ad) => ad.toJSON());
};

module.exports = {
  initialAds,
  nonExistingId,
  adsInDb,
};
