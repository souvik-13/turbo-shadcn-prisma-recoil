import { PlopTypes } from "@turbo/gen";
import path from "path";

// Learn more about Turborepo Generators at https://turbo.build/repo/docs/core-concepts/monorepos/code-generation

const thisDir = path.join(__dirname, "..", "..");

export default function generator(plop: PlopTypes.NodePlopAPI): void {
  // A simple generator to add a new React component to the internal UI library
  plop.setGenerator("ui:add", {
    description: "Adds a new ui component",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is the name of the component?",
      },
      {
        type: "list",
        name: "componentType",
        message: "What type of component do you want to create?",
        choices: ["shadcn", "custom"],
        default: "shadcn",
      },
    ],
    actions: function (data) {
      const actions: (
        | { type: string; path: string; templateFile: string }
        | { type: string; path: string; pattern: RegExp; template: string }
      )[] = [];
      // const actions = PlopTypes.Actions = [];
      if (data?.componentType === "custom") {
        actions.push({
          type: "add",
          path: "src/components/custom/{{kebabCase name}}.tsx",
          templateFile: "templates/component.hbs",
        });
        // actions.push({
        //   type: "append",
        //   path: "package.json",
        //   pattern: /"exports": {(?<insertion>)/g,
        //   template:
        //     '\t\t"./{{kebabCase name}}": "./src/components/custom/{{kebabCase name}}.tsx",',
        // });
      } else if (data?.componentType === "shadcn") {
        const execSync = require("child_process").execSync;
        execSync(`pnpm dlx shadcn-ui@latest add ${data?.name}`, {
          cwd: thisDir,
          stdio: "inherit",
        });
      }

      return actions;
    },
  });
}
