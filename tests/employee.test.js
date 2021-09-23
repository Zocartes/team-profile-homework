const Employee = require('../lib/Employee');

describe("getName", () => {
    it("should retrieve the name of the Employee", () => {
        const employee = new Employee("Izy", 12, "izy@gmail.com");

        expect(employee.getName()).toEqual("Izy")
    });
});

describe("getID", () => {
    it("should retrieve the ID of the Employee", () => {
        const employee = new Employee("Izy", 12, "izy@gmail.com");

        expect(employee.getId()).toEqual(12)
    });
});

describe("getEmail", () => {
    it("should retrieve the email of the Employee", () => {
        const employee = new Employee("Izy", 12, "izy@gmail.com");

        expect(employee.getEmail()).toEqual("izy@gmail.com")
    });
});

describe("getRole", () => {
    it("should retrieve the role of the Employee", () => {
        const employee = new Employee("Izy", 12, "izy@gmail.com");

        expect(employee.getRole()).toEqual("Employee")
    });
});