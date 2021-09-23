const Intern = require('../lib/intern');

describe("getSchool", () => {
    it("should retrieve the office number of the intern", () => {
        const intern = new Intern("Izy", 12, "izy@gmail.com", "UCLA");

        expect(intern.getSchool()).toEqual("UCLA")
    });
});

describe("getRole", () => {
    it("should retrieve the role of the intern", () => {
        const intern = new Intern("Izy", 12, "izy@gmail.com", 365);

        expect(intern.getRole()).toEqual("Intern")
    });
});
