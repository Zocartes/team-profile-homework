const Engineer = require('../lib/engineer');

describe("getGithub", () => {
    it("should retrieve the office number of the engineer", () => {
        const engineer = new Engineer("Izy", 12, "izy@gmail.com", "israel-molestina");

        expect(engineer.getGithub()).toEqual("israel-molestina")
    });
});

describe("getRole", () => {
    it("should retrieve the role of the engineer", () => {
        const engineer = new Engineer("Izy", 12, "izy@gmail.com", 365);

        expect(engineer.getRole()).toEqual("Engineer")
    });
});
