# news_aggregator
News aggregator in angular2. Based on requests made to a google news API, UIFaces and WeatherBit.

Google news API (https://newsapi.org/s/google-news-api) provides actual news from all around the world.  
UIFaces API (https://uifaces.co/api-docs) is a service that provides user avatars (service is used in an application to mock a photo of a real author of an article).   
WeatherBit API (https://www.weatherbit.io/api/weather-current) provides an actual weather (in application is used on the main page in weather-window component).  

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.2.9.

## Screens from application
![alt text](https://user-images.githubusercontent.com/39520658/63208473-bf80cd80-c0d4-11e9-8e53-1093909fcfab.png)
![alt_text](https://user-images.githubusercontent.com/39520658/63227886-d6661380-c1eb-11e9-9df2-f590fa07d441.png)

## Preparation
User should generate API key for UIFaces service (https://uifaces.co/api-docs), for google news API service (https://newsapi.org/s/google-news-api) and for WeatherBit API (https://www.weatherbit.io/api). Generated keys should be placed inside environment.ts file (/YOUR_PROJECT_MAIN_FOLDER/src/app/shared/environments/environment.ts) which user should create based on environment-template.ts (present in the same directory).
Before serving an application in a main folder a user should run `npm install` command, which will install all missing dependencies.

## Running application
When inside a project folder user can type `ng serve --open` (`--open` flag should open a browser with proper address, but if this will not work, an address is displayed in terminal when running ng serve right at the beginning).

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
