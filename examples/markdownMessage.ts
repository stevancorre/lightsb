import { StringBuilder } from "../src/stringBuilder";

class MarkdownStringBuilder extends StringBuilder {
    public append(content: any): MarkdownStringBuilder {
        return super.append(content) as MarkdownStringBuilder;
    }

    public appendBold(text: string): MarkdownStringBuilder {
        return this.appendSurrounded(text, "**");
    }

    public appendItalic(text: string): MarkdownStringBuilder {
        return this.appendSurrounded(text, "*");
    }

    private appendSurrounded(text: string, thingsAroundTheText: string): MarkdownStringBuilder {
        this
            .append(thingsAroundTheText)
            .append(text)
            .append(thingsAroundTheText);

        return this;
    }
}

const builder: MarkdownStringBuilder = new MarkdownStringBuilder();
builder
    .appendBold("bold text")
    .append(" nothing special here ")
    .appendItalic("italic text here");

console.log(builder.toString());

// STDOUT:
// **bold text** nothing special here *italic text here*