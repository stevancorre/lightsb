# Light String Builder 👷

[![NPM](https://nodei.co/npm/lightsb.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/lightsb/)

[![Known Vulnerabilities](https://snyk.io/test/github/halil/StringBuilder/badge.svg?targetFile=package.json)](https://snyk.io/test/github/halil/StringBuilder?targetFile=package.json)

Light simple string builder for NPM

<br>

## 📥 How to install

```console
$ npm install lightsb
```

<br>

## 🏃 Quick start

```ts
const capacity: number = 7;
const builder: IStringBuilder = new StringBuilder("content", capacity);

builder.setCapacity(1024);

builder.append("first thing").append(420);
builder.appendRepeat("repeat 3 this times", 3);

builder.appendLine("new-line terminated")
builder.appendLineRepeat("3 lines here", 3);
builder.appendLines("line 1", "line 2", "...");
builder.appendEmptyLine();
builder.appendEmptyLines(42);

builder.setContent("content");
builder.clear();

const equals: boolean = builder.equals("other");
const isEmpty: boolean = builder.isEmpty();

const sub: string | undefined = builder.substring(0, 32);

const content: string | undefined = builder.toString();
```

<br>

## 📄 Documentation

### 🏗️ Constructor

Initialize a new string builder

```ts
constructor(content?: string, capacity?: number)
```

```ts
// initializes a new string builder with no content and no capacity limit
const builder: IStringBuilder = new StringBuilder();

// initializes a new string builder with "content" as content and no capacity limit
const builder: IStringBuilder = new StringBuilder("content");

// initializes a new string builder with "content" as content and a capacity of 42
const builder: IStringBuilder = new StringBuilder("content", 42);
```

### 🌡️ Set capacity

Sets the string builder's capacity

```ts
setCapacity(capacity: number | undefined): IStringBuilder;
```

```ts
// set capacity to 240
// if the builder was containing something, the overflow is removed
builder.setCapacity(240);

// remove capacity limit
builder.setCapacity();
```

### ➕ Append content

Appends `content`

```ts
append(content: any): IStringBuilder;
```

```ts
// appends "content"
// if the new content exceeds the builder's capacity, throws an `OutOfRangeError`
builder.append("content");
```

### ➕ Append content N times

Appends `content` `count` times

```ts
appendRepeat(content: any, count: number): IStringBuilder;
```

```ts
// appends "content" times
// if the new content exceeds the builder's capacity, throws an `OutOfRangeError`
builder.appendRepeat("content", 23);
```

### ➕ Append a new-line terminated content

Appends `content` as a line

```ts
appendLine(content: any): IStringBuilder;
```

```ts
// appends "content\n"
// if the new content exceeds the builder's capacity, throws an `OutOfRangeError`
builder.appendLine("content");
```

### ➕ Append N new-line terminated contents

Appends `content` as lines `count` times

```ts
appendLineRepeat(content: any, count: number): IStringBuilder;
```

```ts
// appends "content\n" 4 times
// if the new content exceeds the builder's capacity, throws an `OutOfRangeError`
builder.appendLine("content", 4);
```

### ➕ Append new-line terminated contents

Appends `content` as lines

```ts
appendLines(...contents: any[]): IStringBuilder;
```

```ts
// appends "line 1\nline 2\n"
// if the new content exceeds the builder's capacity, throws an `OutOfRangeError`
builder.appendLines("line 1", "line 2");
```

### ➕ Append a new line

Appends an empty new line

```ts
appendEmptyLine(): IStringBuilder;
```

```ts
// appends "\n"
// if the new content exceeds the builder's capacity, throws an `OutOfRangeError`
builder.appendEmptyLine();
```

### ➕ Append N new lines

Appends `count` empty new lines

```ts
appendEmptyLines(count: number): IStringBuilder;
```

```ts
// appends "\n\n\n"
// if the new content exceeds the builder's capacity, throws an `OutOfRangeError`
builder.appendEmptyLines(3);
```

### ➖ Set content

Sets the content

```ts
setContent(content: any): IStringBuilder;
```

```ts
// sets the content to "content"
// if the new content exceeds the builder's capacity, throws an `OutOfRangeError`
builder.setContent("content");
```

### ✖️ Clear

Clears the content (sets to undefined)

```ts
clear(): IStringBuilder;
```

```ts
// clears the builder
builder.clear();
```

### 🟰 Compare

Checks if the content is equal to `other`

```ts
equals(other: string): boolean;
```

```ts
// checks if the content is equal to "other"
const result: boolean = builder.equals("other");
```

### 🗑️ Check emptiness

Checks if the content is empty

```ts
isEmpty(): boolean;
```

```ts
// checks if the content is empty (either undefined or 0 length)
const result: boolean = builder.isEmpty();
```

### ✂️ Substring

Returns the substring at `start` of length `end` (if provided), else, the rest of the content

```ts
substring(start: number, end?: number | undefined): string | undefined;
```

```ts
// get first two letters of the builder's content
const sub: string | undefined = builder.substring(0, 2);
```

### 🏁 Get content

Return the content as string

```ts
toString(): string | undefined;
```

```ts
// get the content of the builder
const content: string | undefined = builder.toString();
```   