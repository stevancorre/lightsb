export interface IStringBuilder {
    setCapacity(capacity: number | undefined): IStringBuilder;

    append(content: any): IStringBuilder;
    appendRepeat(content: any, count: number): IStringBuilder;

    appendLine(line: any): IStringBuilder;
    appendLineRepeat(content: any, count: number): IStringBuilder;
    appendLines(...lines: any[]): IStringBuilder;

    appendEmptyLine(): IStringBuilder;
    appendEmptyLines(count: number): IStringBuilder;

    setContent(content: any): IStringBuilder;
    clear(): IStringBuilder;

    equals(other: string): boolean;
    isEmpty(): boolean;
    substring(start: number, end?: number | undefined): string | undefined;

    toString(): string | undefined;
}

export class OutOfRangeError extends Error { }

export class StringBuilder implements IStringBuilder {
    public constructor(
        private content?: string,
        private capacity?: number) { }

    public setCapacity(capacity: number | undefined): IStringBuilder {
        if (capacity != undefined && capacity < 0) {
            throw new Error("`capacity` should not be less than 0.");
        }

        this.capacity = capacity;

        if (this.capacity && this.content && this.content.length > this.capacity) {
            this.content = this.content.substring(0, this.content.length - this.capacity - 1);
        }

        return this;
    }

    public append(content: any): IStringBuilder {
        if (this.content == undefined) {
            this.content = "";
        }

        if (this.capacity != undefined) {
            const newContentSize: number = this.content.length + content.length;
            if (newContentSize > this.capacity) {
                throw new OutOfRangeError(`Content length is greater than the maximum capacity (${newContentSize}/${this.capacity})`);
            }
        }

        this.content += String(content);
        return this;
    }

    public appendRepeat(content: any, count: number): IStringBuilder {
        if (count < 0) {
            throw new Error("`count` should not be less than 0.");
        }

        for (let i = 0; i < count; i++) {
            this.append(content);
        }

        return this;
    }

    public appendLine(content: any): IStringBuilder {
        return this.append(`${content}\n`);
    }

    public appendLineRepeat(content: any, count: number): IStringBuilder {
        return this.appendRepeat(`${content}\n`, count);
    }

    public appendLines(...lines: any[]): IStringBuilder {
        return this.appendLine(lines.join("\n"));
    }

    public appendEmptyLine(): IStringBuilder {
        return this.append("\n");
    }

    public appendEmptyLines(count: number): IStringBuilder {
        return this.appendRepeat("\n", count);
    }

    public setContent(content: any): IStringBuilder {
        return this.clear().append(content);
    }

    public clear(): IStringBuilder {
        this.content = undefined;
        return this;
    }

    public substring(start: number, end?: number | undefined): string | undefined {
        return this.content?.substring(start, end);
    }

    public isEmpty(): boolean {
        return this.content == undefined || this.content.length == 0;
    }

    public equals(other: string): boolean {
        return this.content == other;
    }

    public toString(): string | undefined {
        return this.content;
    }
}