// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  firebase: {
    projectId: 'mars-soil',
    appId: '1:1021653134434:web:74b6ed3c7e5161b0a8753b',
    databaseURL: 'https://mars-soil-default-rtdb.firebaseio.com',
    storageBucket: 'mars-soil.appspot.com',
    apiKey: 'AIzaSyDpRMlsh_ztMlwF36QIMVdHYoqwaTJelss',
    authDomain: 'mars-soil.firebaseapp.com',
    messagingSenderId: '1021653134434',
    measurementId: 'G-SQF6WETJRT',
  },
  linkedInCredentials: {
    clientId: "77r9x7pr5d8nq7",
    redirectUrl: "http://localhost:4200/forms",
    scope: ["r_liteprofile", "r_emailaddress"]
  },
  linkedinAPI: 'https://api.linkedin.com/v2/',
  production: false
};
