# 3D Scan Assets for Dinacon 2025

## Development environment

You need to have Node.js installed, preferably LTS version 22. Install prerequisites and start development build:

```sh
npm install
npm start dev
```

## Contributing

1. [Fork](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo) and clone the repository

```sh
git clone git@github.com:<your username>/Dina3D.git
```

2. Copy your GLB file assets to folder [public/assets/](public/assets/). For example `public/assets/my_3d_scan.glb`

3. In the [src/main.js](src/main.js) file. You can see the first entry

```js
const params = {
  source: "assets/green-coral.glb",
  description: "Green coral captured from underwater camera at DinaCon",
  title: "Green Coral",
  author: "Jay Bond"
};
const jay_glb = generateGlbCard(params);
```

Copy and paste this entry and replace the information with your own scan file. Be sure to make unique variable names. for example:

```js
const my_params = {
  source: "assets/my_3d_scan.glb",
  description: "Description of my scan",
  title: "Tile of my scan",
  author: "My name"
};
const my_glb = generateGlbCard(my_params);
```

4. Add the card to the main folder

