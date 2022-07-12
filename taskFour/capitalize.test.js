const capitalize = require('./capitalize');

describe("capitalize", () => {
    test("should capitalize first letter", () => {
        expect(capitalize("hello")).toBe("Hello");
    });
    test("should capitalize first letter", () => {
        expect(capitalize("how are you?")).toBe("How are you?");
    })
})
