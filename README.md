# Marketplace Apps Seed

---
**NOTE**

Don't extend the `shared` folder, in the upcoming months we will move it to the `js-sdk` and `marketplace-react`.

---

The `apps-seed` is based on the [`marketplace-react`](https://www.npmjs.com/package/@datorama/marketplace-react), [`js-sdk`](https://www.npmjs.com/package/@datorama/sdk) and [`app-components`](https://www.npmjs.com/package/@datorama/app-components).

## Development

First, clone the repo and run `npm install` - this will install all of the dependencies for running the app. Next, to start the development server run `npm start`, This will open your default browser at [https://localhost:3000](https://localhost:3000)
From this point you have 2 options:

1. Open the developer playground and enter 3 different routes for each mode (Install, Run and Demo).
2. Run the `apps-cli` and develop locally.

To run the `apps-cli` open your terminal and run - 

```shell script
npm i -g @datorama/cli
```

next the `dato` command is available and run

```shell script
dato --env=fe-foo --token=API_TOKEN
```


## Build

In order to build a zip to upload to the Datorama Marketplace run - 

```shell script
npm run build:zip
```
