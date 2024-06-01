import type { PlopTypes } from "@turbo/gen";

// Learn more about Turborepo Generators at https://turbo.build/repo/docs/core-concepts/monorepos/code-generation

export default function generator(plop: PlopTypes.NodePlopAPI): void {
  plop.setGenerator("store:add", {
    description: "Create a new Recoil atom and hook",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is the name of the atom?",
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/atoms/{{camelCase name}}.ts",
        templateFile: "templates/atom.hbs",
      },
      {
        type: "add",
        path: "src/hooks/use{{pascalCase name}}.ts",
        templateFile: "templates/hook.hbs",
      },
      {
        type: "append",
        path: "./src/atoms/index.ts",
        pattern: /\/\/ Add new atoms here/g,
        template: 'export * from "./{{camelCase name}}";',
      },
      {
        type: "append",
        path: "./src/hooks/index.ts",
        pattern: /\/\/ Add new hooks here/g,
        template: 'export * from "./use{{pascalCase name}}";',
      },
    ],
  });
}
