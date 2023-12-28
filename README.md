<!-- # Turborepo starter

This is an official starter Turborepo.

## Using this example

Run the following command:

```sh
npx create-turbo@latest
```

## What's inside?

This Turborepo includes the following packages/apps:

### Apps and Packages

- `docs`: a [Next.js](https://nextjs.org/) app
- `web`: another [Next.js](https://nextjs.org/) app
- `@repo/ui`: a stub React component library shared by both `web` and `docs` applications
- `@repo/eslint-config`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `@repo/typescript-config`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

### Build

To build all apps and packages, run the following command:

```
cd my-turborepo
pnpm build
```

### Develop

To develop all apps and packages, run the following command:

```
cd my-turborepo
pnpm dev
```

### Remote Caching

Turborepo can use a technique known as [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching) to share cache artifacts across machines, enabling you to share build caches with your team and CI/CD pipelines.

By default, Turborepo will cache locally. To enable Remote Caching you will need an account with Vercel. If you don't have an account you can [create one](https://vercel.com/signup), then enter the following commands:

```
cd my-turborepo
npx turbo login
```

This will authenticate the Turborepo CLI with your [Vercel account](https://vercel.com/docs/concepts/personal-accounts/overview).

Next, you can link your Turborepo to your Remote Cache by running the following command from the root of your Turborepo:

```
npx turbo link
```

## Useful Links

Learn more about the power of Turborepo:

- [Tasks](https://turbo.build/repo/docs/core-concepts/monorepos/running-tasks)
- [Caching](https://turbo.build/repo/docs/core-concepts/caching)
- [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching)
- [Filtering](https://turbo.build/repo/docs/core-concepts/monorepos/filtering)
- [Configuration Options](https://turbo.build/repo/docs/reference/configuration)
- [CLI Usage](https://turbo.build/repo/docs/reference/command-line-reference) -->


# app.scally.chat

Welcome to app.scally.chat, a scalable chat system built with TurboRepo.

## Overview

This project is a scalable chat application that utilizes TurboRepo for managing the monorepo structure and combines technologies like Node.js, Next.js, Redis, Shadcn, Tailwind CSS, and PubSub for efficient communication and styling.

## Tech Stack

- TypeScript (ts)
- TurboRepo
- Node.js
- Next.js
- Redis
- Shadcn
- Tailwind CSS
- PubSub

## Features

- **Scalable Chat System**: Utilizes TurboRepo's scalable architecture for managing the codebase.
- **Real-time Communication**: Powered by Redis and PubSub for efficient real-time message broadcasting.
- **Server-Side Rendering**: Utilizes Next.js for server-side rendering, improving performance and SEO.
- **Custom Styling**: Styled with Tailwind CSS for rapid and customizable UI development.

## Installation

### Prerequisites

- Node.js installed
- Redis server running

### Steps

1. Clone the repository:

   ```
   git clone https://github.com/ShubhChaturvedi/app.scally.chat.git
   ```

2. Install dependencies:

    ```
    cd ./app.scally.chat
    npm install
    ```

3. Access the application in your browser at http://localhost:3000.

## Usage
### To use this project:

- **Development** : For development, run the development server using npm run dev.
- **Production** : To deploy in production, build the project and start the server using appropriate scripts.
