// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  newsToken: 'GOOGLE_NEWS_API_KEY',
  newsApiUrl: 'https://newsapi.org/v2',
  newsHeaders: { 'Content-Type': 'application/json' },
  facesApiUrl: 'https://uifaces.co/api',
  facesHeaders: { 'X-API-KEY': '2c079e5ebf89c5b6e69077d65dda79' },
  weatherToken: 'de653cd0b10647b3b0ce2a9f507c9716',
  weatherApiUrl: 'https://api.weatherbit.io/v2.0/current'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
