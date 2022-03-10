import { IStringBuilder, StringBuilder } from "../src/stringBuilder";

class MessageBuilder extends StringBuilder {
    public appendTitle(title: string): MessageBuilder {
        this.appendLine(`-- ${title.toUpperCase()} --`);
        this.appendEmptyLine();

        return this;
    }

    public appendCategory(category: CategoryBuilder): MessageBuilder {
        this.appendLine(category.toString());
        return this;
    }
}

class CategoryBuilder extends StringBuilder {
    private readonly fields: string[] = [];

    public constructor(private title: string) {
        super();
    }

    public appendField(name: string, value: string) {
        this.fields.push(`${name}: ${value}`);
        return this;
    }

    public toString(): string | undefined {
        const builder: IStringBuilder = new StringBuilder();
        const fieldsCount: number = this.fields.length;

        if (fieldsCount == 0) {
            builder.appendLine(`─ ${this.title}`);
        }
        else {
            builder.appendLine(`┌ ${this.title}`);

            for (let i = 0; i < fieldsCount - 1; i++) {
                builder.appendLine(`│ ${this.fields[i]}`);
            }

            builder.appendLine(`└ ${this.fields[fieldsCount - 1]}`);
        }

        return builder.toString();
    }
}

const message: MessageBuilder = new MessageBuilder();
message.appendTitle("message title");

const categoryEmpty: CategoryBuilder = new CategoryBuilder("empty category");

const categorySome: CategoryBuilder = new CategoryBuilder("category with some fields");
categorySome
    .appendField("Field 1", "Value 1")
    .appendField("Field 2", "Value 2")
    .appendField("Field 3", "Value 3");

const categoryOne: CategoryBuilder = new CategoryBuilder("category with one field");
categoryOne
    .appendField("Field 4", "Value 4");

message.appendCategory(categoryEmpty);
message.appendCategory(categorySome);
message.appendCategory(categoryOne);

console.log(message.toString());

// STDOUT:
// -- MESSAGE TITLE --
// 
// ─ empty category
// 
// ┌ category with some fields
// │ Field 1: Value 1
// │ Field 2: Value 2
// └ Field 3: Value 3
// 
// ┌ category with one field
// └ Field 4: Value 4