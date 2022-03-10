import { IStringBuilder, StringBuilder } from "../src/stringBuilder";

interface ICommand {
    name: string;
    description: string;
}

class Program {
    public constructor(private programName: string, private commands: ICommand[]) { }

    public printUsage(): void {
        const builder: IStringBuilder = new StringBuilder();
        builder
            .appendLine(`${this.programName} <command>`)
            .appendEmptyLine()
            .appendLine("Usage:")
            .appendLines(...this.commands.map(x => `    ${x.name}\t${x.description}`));

        console.log(builder.toString());
    }
}

const commands: ICommand[] = [
    {
        name: "init",
        description: "initialize something"
    },
    {
        name: "remove",
        description: "remove something"
    }
]

const program: Program = new Program("my-program", commands);
program.printUsage();

// STDOUT:
// my-program <command>
// 
// Usage:
//     init        initialize something
//     remove      remove something