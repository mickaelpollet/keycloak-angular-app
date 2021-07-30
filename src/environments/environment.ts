// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  KeycloakConfig: {
    url: 'https://auth.poudlard.net:8450/auth/',
    realm: 'poudlard',
    clientId: 'poudlard-front',

    // url: 'https://cerbere.mipih.fr/auth/',
    // realm: 'test_realm',
    // clientId: 'kata_test_FRONT',

    clientSecret: ''
  },
  appName: 'Keycloak Angular Testing Application',
  appNameAcronym: 'KATA',
  appUrl: 'https://kata.poudlard.net:4443'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
