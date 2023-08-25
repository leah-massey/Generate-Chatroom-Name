const generateChatRoomNames = require("./generateChatRoomNames");

describe("generateChatRoomNames", () => {
  test("it returns an empty array if no users exist", () => {
    const names = [];
    expect(generateChatRoomNames(names)).toEqual([]);
  });
});
