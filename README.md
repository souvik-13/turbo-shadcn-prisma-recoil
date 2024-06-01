# Turborepo starter with shadcn/ui, nextjs, prisma, and recoil

![turborepo](https://img.shields.io/badge/turborepo-crimson?style=for-the-badge&link=https%3A%2F%2Fgithub.com%2Fvercel%2Fturbo) ![NEXT](https://img.shields.io/badge/NEXT-black?style=for-the-badge&link=https%3A%2F%2Fnextjs.org%2F) ![shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-grey?style=for-the-badge&link=https%3A%2F%2Fgithub.com%2Fshadcn-ui%2Fui) ![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white) ![Static Badge](https://img.shields.io/badge/Recoil-darkblue?style=for-the-badge&link=https%3A%2F%2Fgithub.com%2Ffacebookexperimental%2FRecoil)

This is an turborepo starter with shadcn/ui, nextjs, prisma, and recoil pre-configured.

> [!NOTE]
> This example uses `pnpm` as package manager. Replacing `pnpm` with `npm` or `yarn` may require additional configuration changes.

## Using this example

Run the following command:

```sh
 npx create-turbo@latest -e https://github.com/souvik-13/turbo-shadcn-prisma-recoil/tree/main -m pnpm
```

### Add ui components

Use the generator to add a new component to the `@repo/ui` package:

```sh
pnpm turbo gen ui:add <component-name>
```

> This works just like the add command in the `shadcn/ui` CLI.

### Add a new recoil atom and hook

Use the generator to add a new Recoil atom and hook to the `@repo/store` package:

```sh
pnpm turbo gen store:add <atom-name>
```

### Add a new app

Turborepo offer a simple command to add a new app:

```sh
pnpm turbo gen workspace --name <app-name>
```

This will create a new empty app in the `apps` directory.

If you want, you can copy an existing app with:

```sh
pnpm turbo gen workspace --name <app-name> --copy
```

> [!NOTE]
> Remember to run `pnpm install` after copying an app.

## What's inside?

This Turborepo includes the following packages/apps:

### Apps and Packages

- `web`: a [Next.js](https://nextjs.org/) app
- `@repo/eslint-config`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `@repo/typescript-config`: `tsconfig.json`s used throughout the monorepo
- `@repo/common`: shared code includeing [zod](https://zod.dev/) schemas and utility functions
- `@repo/db`: database using [Prisma](https://www.prisma.io/) ORM
- `@repo/store`: [Recoil](https://recoiljs.org/) state management package
- `@repo/ui`: a stub React component library using [shadcn/ui](https://ui.shadcn.com/)

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

### Build

To build all apps and packages, run the following command:

```sh
cd my-turborepo
pnpm build
```

### Develop

To develop all apps and packages, run the following command:

```sh
cd my-turborepo
pnpm dev
```

### Remote Caching

Turborepo can use a technique known as [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching) to share cache artifacts across machines, enabling you to share build caches with your team and CI/CD pipelines.

By default, Turborepo will cache locally. To enable Remote Caching you will need an account with Vercel. If you don't have an account you can [create one](https://vercel.com/signup), then enter the following commands:

```sh
cd my-turborepo
npx turbo login
```

This will authenticate the Turborepo CLI with your [Vercel account](https://vercel.com/docs/concepts/personal-accounts/overview).

Next, you can link your Turborepo to your Remote Cache by running the following command from the root of your Turborepo:

```sh
npx turbo link
```

## Useful Links

Learn more about the power of Turborepo:

- [Tasks](https://turbo.build/repo/docs/core-concepts/monorepos/running-tasks)
- [Caching](https://turbo.build/repo/docs/core-concepts/caching)
- [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching)
- [Filtering](https://turbo.build/repo/docs/core-concepts/monorepos/filtering)
- [Configuration Options](https://turbo.build/repo/docs/reference/configuration)
- [CLI Usage](https://turbo.build/repo/docs/reference/command-line-reference)
