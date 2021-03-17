const mongoose = require("mongoose");
const app = require("../src/server");
const supertest = require("supertest");
const api = supertest(app);
const { server } = require("../src/index");
const Ad = require("../src/models/ads");
const { initialAds, nonExistingId, adsInDb } = require("./helpers");

beforeEach(async () => {
  await Ad.deleteMany();

  // sequential
  for (const ad of initialAds) {
    const adObject = new Ad(ad);
    await adObject.save();
  }
});

describe("GET all ads", () => {
  test("ads are returned as text/html", async () => {
    await api
      .get("/ads")
      .expect(200)
      .expect("Content-Type", /application\/json/);
  });

  test("there are three ads", async done => {
    const response = await api.get("/ads");
    expect(response.body).toHaveLength(initialAds.length);
    done()
  });
});

describe("Create an ad", () => {
  test("a valid ad can be added ", async () => {
    const newAd = {
      title: "async/await simplifies making async calls",
      description: "valid ad added",
    };

    await api
      .post("/ads/new-ad")
      .send(newAd)
      .expect(302)
      .expect("Content-Type", /text\/plain/);

    const adsAtEnd = await adsInDb();
    expect(adsAtEnd).toHaveLength(initialAds.length + 1);
  });

  test("is not possible with an invalid ad", async () => {
    const newAd = {
      title: "invalid",
      description: "invalid"
    };

    await api.post("/ads/new-ad").send(newAd).expect(302);

    const response = await api.get("/ads");

    expect(response.body).toHaveLength(initialAds.length);
  });
});


// test('an ad can be deleted', async () => {
//   const { response: firstResponse } = await getAllContentFromNotes()
//   const { body: notes } = firstResponse
//   const noteToDelete = notes[0]

//   await api
//     .delete(`/api/notes/${noteToDelete.id}`)
//     .expect(204)

//   const { contents, response: secondResponse } = await getAllContentFromNotes()

//   expect(secondResponse.body).toHaveLength(initialNotes.length - 1)

//   expect(contents).not.toContain(noteToDelete.content)
// })

// test('a note that has an invalid id can not be deleted', async () => {
//   await api
//     .delete('/api/notes/1234')
//     .expect(400)

//   const { response } = await getAllContentFromNotes()

//   expect(response.body).toHaveLength(initialNotes.length)
// })

// test('a note that has a valid id but do not exist can not be deleted', async () => {
//   const validObjectIdThatDoNotExist = '60451827152dc22ad768f442'
//   await api
//     .delete(`/api/notes/${validObjectIdThatDoNotExist}`)
//     .expect(404)

//   const { response } = await getAllContentFromNotes()

//   expect(response.body).toHaveLength(initialNotes.length)
// })

afterAll(() => {
  mongoose.connection.close();
  server.close();
});
