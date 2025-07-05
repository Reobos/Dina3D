# 3D Scan Assets for Dinacon 2025

Check out the 3D Assets website generated from this code: [https://reobos.github.io/Dina3D/](https://reobos.github.io/Dina3D/)

If you deploy to the local server on the DinaCam WiFi, access it with [http://192.168.8.174/dina3d/](http://192.168.8.174/dina3d/)

## Development environment

You need to have Node.js installed, preferably LTS version 22. Install prerequisites and start development build:

```sh
npm install
npm start dev
```

## Deploying to local network

To deploy the production site to a local server running nginx at `192.168.8.174`, use the following commands:

1. Build the production site:

```sh
npm run build
```

2. Ensure the destination directory exists and you have write permissions. If not, create it with:

```sh
ssh dinacam@192.168.8.174 'sudo mkdir -p /var/www/html/dina3d && sudo chown $USER:$USER /var/www/html/dina3d'
```

Then deploy the `dist` folder to your server using `rsync` over `ssh`:

```sh
rsync -avz dist/ dinacam@192.168.8.174:/var/www/html/dina3d/
```

3. Ensure nginx is serving the files from the correct directory. You may need to reload nginx:

```sh
ssh user@192.168.8.174 'sudo systemctl reload nginx'
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

4. Add the card to the main app html

```js
document.querySelector('#app').innerHTML = `
  <div class="card-container">
    ${jay_glb}
    ${fish_house_glb}
    ${my_glb}
  </div>
```

5. Push changes and request to merge the fork!
