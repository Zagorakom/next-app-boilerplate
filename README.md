# Next App Boilerplate

React, Typescript, Next.js (app router + server components)\
(also: SCSS, redux-toolkit, next-translate, docker-multi-env)

### Requirements: `Node.js >= v20.9.0`
> make `.env.local` file using sample `.env.local.sample`

&nbsp;
&nbsp;


## Available Scripts

```bash
npm run dev
```
> Development mode with HMR\
> Open [http://localhost:3000](http://localhost:3000)

&nbsp;
```bash
npm run dev80
```
> Development mode with HMR\
> Open [http://localhost](http://localhost)

&nbsp;
```bash
npm run build
```
> Generating optimized build for production

&nbsp;
```bash
npm run prod
```
> Start the production\
> `!!!! NOTE !!!!`: don't forget to copy folder `.next/static` to `.next/standalone/.next`\
> `OR`: just use command `npm run prod:local`\
> `OR`: use Docker (commands below)

&nbsp;
&nbsp;

## Using Docker and Makefile

### Development environment

```js
make build-development
make start-development
make stop-development // to shut down
```

Open http://localhost:3001

### Staging environment

```js
make build-staging
make start-staging
make stop-staging // to shut down
```

Open http://localhost:3002

### Production environment

```js
make build-production
make start-production
make stop-production // to shut down
```

Open http://localhost:3003

&nbsp;

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
