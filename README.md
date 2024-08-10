# Welcome to the project Shopping Coins👋

## Let's start run the project

Before we begin, you will need to have Node.js and Android SKD installed on your machine, have an Apache server running, have the Expo application installed at your smartphone or on your virtual device and a SQL database manager

1. Install dependencies

```bash
npm install
```

2. Install dependencies on the api folder and start the database
   
```bash

cd api
npm install
npx sequelize-cli db:create
npx sequelize-cli db:migrate
npx sequelize-cli db:seed:all 

```

3. Got to the config.js on the path "api/config" and put your local ip on the "urlRootRoute"

```bash
cd api/config
```

4. Start the api 

```bash
npm start
```

5. Start the app

```bash
npx expo start
```

After all these steps and you start running the app. That's it, enjoy the app now


## Expo Playstore: https://play.google.com/store/apps/details?id=host.exp.exponent&hl=pt_BR&pli=1

## Laragon: https://laragon.org/download/  ( Whit the laragon you can use te apache sever and the heidisql ) 

## Android Studio: https://developer.android.com/studio?hl=pt-br