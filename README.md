<h1 align="center">
    <br>
    <a href="https://github.com/stevancorre/lightsb">
        <img src="https://i.imgur.com/6DeIvOH.png" alt="Light String Builder icon" width="200">
    </a>
    <br>
    Light String Builder
    <br>
</h1>

<h4 align="center">Simple light TypeScript string builder.</h4>

<p align="center">
    <a href="https://nodejs.dev">
        <img src="https://img.shields.io/badge/Node.JS-68A063?style=for-the-badge&logo=node.js&logoColor=white">
    </a>
    <a href="https://www.typescriptlang.org">
        <img src="https://img.shields.io/badge/TypeScript-007acc?style=for-the-badge&logo=typescript&logoColor=white">
    </a>
    <a href="https://www.npmjs.com/package/lightsb">
        <img src="https://img.shields.io/badge/NPM-ff0000?style=for-the-badge&logo=npm&logoColor=white">
    </a>
    <a href="https://paypal.me/aiixu">
        <img src="https://img.shields.io/badge/Donate-00457C?style=for-the-badge&logo=paypal&logoColor=white">
    </a>
</p>

<p align="center">
    <a href="#📥-download">Download</a> •
    <a href="https://stevancorre.github.io/lightsb">Documentation</a> •
    <a href="#🏃-quick-start">Quick start</a> •
    <a href="#👑-credits">Credits</a> •
    <a href="#📝-license">License</a>
</p>

<br>

## 📥 Download

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

## 📝 License

This project is <a href="https://opensource.org/licenses/MIT">MIT</a> licensed.

<br>

## 👑 Credits

- Icon: <a href="https://www.flaticon.com/free-icons/engineer" title="engineer icons">Engineer icons created by Freepik - Flaticon</a>
- README design: <a href="https://github.com/amitmerchant1990/electron-markdownify/blob/master/README.md">github.com/amitmerchant1990</a>