import { IStringBuilder, StringBuilder, OutOfRangeError } from "../src/stringBuilder";

describe("# initialize", () => {
    it("should initialize empty builder", () => {
        const builder: IStringBuilder = new StringBuilder();

        expect(builder.toString()).toEqual(undefined);
    });

    it("should initialize builder with text", () => {
        const builder: IStringBuilder = new StringBuilder("content");

        expect(builder.toString()).toEqual("content");
    });
});

describe("# append", () => {
    it("should append text", () => {
        const builder: IStringBuilder = new StringBuilder();
        builder.append("content");

        expect(builder.toString()).toEqual("content");
    });

    it("should append text twice", () => {
        const builder: IStringBuilder = new StringBuilder();
        builder.appendRepeat("content", 2);

        expect(builder.toString()).toEqual("contentcontent");
    });

    it("should not append text", () => {
        const builder: IStringBuilder = new StringBuilder();

        expect(() => builder.appendRepeat("content", -1)).toThrow(new Error("`count` should not be less than 0."));
    });

    it("should append line of text", () => {
        const builder: IStringBuilder = new StringBuilder();
        builder.appendLine("content");

        expect(builder.toString()).toEqual("content\n");
    });

    it("should append line of text twice", () => {
        const builder: IStringBuilder = new StringBuilder();
        builder.appendLineRepeat("content", 2);

        expect(builder.toString()).toEqual("content\ncontent\n");
    });

    it("should append a new line", () => {
        const builder: IStringBuilder = new StringBuilder();
        builder.appendEmptyLine();

        expect(builder.toString()).toEqual("\n");
    });

    it("should append a new line twice", () => {
        const builder: IStringBuilder = new StringBuilder();
        builder.appendEmptyLines(2);

        expect(builder.toString()).toEqual("\n\n");
    });
});

describe("# set", () => {
    it("should set content", () => {
        const builder: IStringBuilder = new StringBuilder();
        builder.setContent("content");

        expect(builder.toString()).toEqual("content");
    });

    it("should not set content", () => {
        const builder: IStringBuilder = new StringBuilder();
        builder.setCapacity(6);

        expect(() => builder.setContent("content")).toThrow(new OutOfRangeError("Content length is greater than the maximum capacity (7/6)"));
    });

    it("should clear content", () => {
        const builder: IStringBuilder = new StringBuilder("content");
        builder.clear();

        expect(builder.toString()).toEqual(undefined);
    });
})

describe("# overflow", () => {
    it("should not set capacity", () => {
        const builder: IStringBuilder = new StringBuilder();

        expect(() => builder.setCapacity(-1)).toThrow(new Error("`capacity` should not be less than 0."));
    });

    it("should append text", () => {
        const builder: IStringBuilder = new StringBuilder();
        builder.setCapacity(7).append("content");

        expect(builder.toString()).toEqual("content");
    });

    it("should not append text", () => {
        const builder: IStringBuilder = new StringBuilder();
        builder.setCapacity(6);

        expect(() => builder.append("content")).toThrow(new OutOfRangeError("Content length is greater than the maximum capacity (7/6)"));
    });

    it("should append text then cut overflow", () => {
        const builder: IStringBuilder = new StringBuilder();
        builder.setCapacity(7).append("content").setCapacity(3);

        expect(builder.toString()).toEqual("con");
    });
});

describe("# compare", () => {
    it("should be equal", () => {
        const builder: IStringBuilder = new StringBuilder("content");

        expect(builder.equals("content")).toEqual(true);
    });

    it("should not be equal", () => {
        const builder: IStringBuilder = new StringBuilder("content");

        expect(builder.equals("not content")).toEqual(false);
    });

    it("should be true", () => {
        const builder: IStringBuilder = new StringBuilder();

        expect(builder.isEmpty()).toEqual(true);
    });

    it("should not be true", () => {
        const builder: IStringBuilder = new StringBuilder("content");

        expect(builder.isEmpty()).toEqual(false);
    });
});

describe("# substring", () => {
    it("should extract first 3 letters", () => {
        const builder: IStringBuilder = new StringBuilder("content");

        expect(builder.toString()?.substring(0, 3)).toEqual("con");
    });
});