import { IStringBuilder, StringBuilder, OutOfRangeError } from "../src/stringBuilder";

describe("# initialize", () => {
    it("should initialize empty builder", () => {
        const builder: IStringBuilder = new StringBuilder();

        expect(builder.getContent()).toEqual(undefined);
    });

    it("should initialize builder with text", () => {
        const builder: IStringBuilder = new StringBuilder("content");

        expect(builder.getContent()).toEqual("content");
    });
});

describe("# append", () => {
    it("should append text", () => {
        const builder: IStringBuilder = new StringBuilder();
        builder.append("content");

        expect(builder.getContent()).toEqual("content");
    });

    it("should append text twice", () => {
        const builder: IStringBuilder = new StringBuilder();
        builder.appendRepeat("content", 2);

        expect(builder.getContent()).toEqual("contentcontent");
    });

    it("should not append text", () => {
        const builder: IStringBuilder = new StringBuilder();

        expect(() => builder.appendRepeat("content", -1)).toThrow(new Error("`count` should not be less than 0."));
    });

    it("should append line of text", () => {
        const builder: IStringBuilder = new StringBuilder();
        builder.appendLine("content");

        expect(builder.getContent()).toEqual("content\n");
    });

    it("should append line of text twice", () => {
        const builder: IStringBuilder = new StringBuilder();
        builder.appendLineRepeat("content", 2);

        expect(builder.getContent()).toEqual("content\ncontent\n");
    });

    it("should append a new line", () => {
        const builder: IStringBuilder = new StringBuilder();
        builder.appendEmptyLine();

        expect(builder.getContent()).toEqual("\n");
    });

    it("should append a new line twice", () => {
        const builder: IStringBuilder = new StringBuilder();
        builder.appendEmptyLines(2);

        expect(builder.getContent()).toEqual("\n\n");
    });
});

describe("# overflow", () => {
    it("should not set capacity", () => {
        const builder: IStringBuilder = new StringBuilder();

        expect(() => builder.setCapacity(-1)).toThrow(new Error("`capacity` should not be less than 0."));
    });

    it("should append text", () => {
        const builder: IStringBuilder = new StringBuilder();
        builder.setCapacity(7).append("content");

        expect(builder.getContent()).toEqual("content");
    });

    it("should not append text", () => {
        const builder: IStringBuilder = new StringBuilder();
        builder.setCapacity(6);

        expect(() => builder.append("content")).toThrow(new OutOfRangeError("Content length is greater than the maximum capacity (7/6)"));
    });

    it("should append text then cut overflow", () => {
        const builder: IStringBuilder = new StringBuilder();
        builder.setCapacity(7).append("content").setCapacity(3);

        expect(builder.getContent()).toEqual("con");
    });
});

describe("# compare", () => {
    it("should be equal", () => {
        const builder: IStringBuilder = new StringBuilder("content");

        expect(builder.equals("content")).toEqual(true);
    });

    it("shouldn't be equal", () => {
        const builder: IStringBuilder = new StringBuilder("content");

        expect(builder.equals("not content")).toEqual(false);
    });
});

describe("# substring", () => {
    it("should extract first 3 letters", () => {
        const builder: IStringBuilder = new StringBuilder("content");

        expect(builder.getContent()?.substring(0, 3)).toEqual("con");
    });
});