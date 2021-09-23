const Manager = require('../lib/manager');

describe("getOfficeNum", () => {
    it("should retrieve the office number of the manager", () => {
        const manager = new Manager("Izy", 12, "izy@gmail.com", 365);

        expect(manager.getOfficeNum()).toEqual(365)
    });
});

describe("getRole", () => {
    it("should retrieve the role of the manager", () => {
        const manager = new Manager("Izy", 12, "izy@gmail.com", 365);

        expect(manager.getRole()).toEqual("Manager")
    });
});