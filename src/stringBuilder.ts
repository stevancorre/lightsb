export interface IStringBuilder {
    /**
     * Sets the string builder's capacity
     * 
     * @param capacity The new capacity
     */
    setCapacity(capacity: number | undefined): IStringBuilder;

    /**
     * Appends `content`
     * 
     * @param content The content to append
     */
    append(content: any): IStringBuilder;

    /**
     * Appends `content` `count` times
     * 
     * @param content The content to append
     * @param count How many times you want to append it
     */
    appendRepeat(content: any, count: number): IStringBuilder;

    /**
     * Appends `content` as a line
     * 
     * @param content The line content
     */
    appendLine(content: any): IStringBuilder;

    /**
     * Appends `content` as lines `count` times
     * 
     * @param content The line content
     * @param count How many times you want to append it
     */
    appendLineRepeat(content: any, count: number): IStringBuilder;

    /**
     * Appends all lines
     * 
     * @param contents The lines
     */
    appendLines(...contents: any[]): IStringBuilder;

    /**
     * Appends an empty new line
     */
    appendEmptyLine(): IStringBuilder;

    /**
     * Appends `count` empty new lines
     * 
     * @param count How many times you want to append it
     */
    appendEmptyLines(count: number): IStringBuilder;

    /**
     * Sets the content
     * 
     * @param content The content
     */
    setContent(content: any): IStringBuilder;

    /**
     * Clears the content (sets to undefined)
     */
    clear(): IStringBuilder;

    /**
     * Checks if the content is equal to `other`
     * 
     * @param other The string to compare with
     */
    equals(other: string): boolean;

    /**
     * Checks if the content is empty
     */
    isEmpty(): boolean;

    /**
     * Returns the substring at `start` of length `end` (if provided), else, the rest of the content
     * 
     * @param start Start index
     * @param end Length
     */
    substring(start: number, end?: number | undefined): string | undefined;

    /**
     * Return the content as string
     */
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

    public appendLines(...contents: any[]): IStringBuilder {
        return this.appendLine(contents.join("\n"));
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