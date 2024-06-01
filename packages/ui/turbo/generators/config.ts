import { PlopTypes } from "@turbo/gen";

// Learn more about Turborepo Generators at https://turbo.build/repo/docs/core-concepts/monorepos/code-generation

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
        choices: ["custom", "shadcn"],
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
          path: "src/{{kebabCase name}}.tsx",
          templateFile: "templates/component.hbs",
        });
        actions.push({
          type: "append",
          path: "package.json",
          pattern: /"exports": {(?<insertion>)/g,
          template: '"./{{kebabCase name}}": "./src/{{kebabCase name}}.tsx",',
        });
      } else {
        const execSync = require("child_process").execSync;
        execSync(
          `pnpm --dir packages/ui dlx shadcn-ui@latest add ${data?.name}`,
          {
            stdio: "inherit",
          },
        );
      }

      return actions;
    },
  });
}
