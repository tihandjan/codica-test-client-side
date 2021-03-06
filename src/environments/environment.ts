// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  auth_routes: {
    apiBase: 'http://localhost:3000',
    signOutPath: 'auth/sign_out',
    signInPath: 'auth/sign_in',
    validateTokenPath: 'auth/validate_token',
  },
  root_url: 'http://localhost:3000/api/v1'
};
