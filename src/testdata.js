import { LoremIpsum } from "lorem-ipsum";

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};
const randomDate = (start, end) => {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
};

const lorem = new LoremIpsum();
const testdata = [];
for (let i = 0; i < 30; i++) {
  testdata.push({
    sender: lorem.generateWords(1) + "@gcmail.com",
    subject: lorem.generateWords(getRandomInt(2, 7)),
    content: lorem.generateParagraphs(getRandomInt(5, 20)),
    time: randomDate(new Date(2023, 5, 14), new Date()).toDateString(),
    unread: getRandomInt(0, 100) > 50,
  });
}

export { testdata };
