// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiBaseUri: 'http://localhost:4300',
  //'https://projectmanagerserver.azurewebsites.net',

  endpoint_user_get: '/users',
  endpoint_user_add: '/users/add',
  endpoint_user_edit: '/users/edit',
  endpoint_user_delete: '/users/delete',

  endpoint_project_get: '/projects',
  endpoint_project_add: '/projects/add',
  endpoint_project_edit: '/projects/edit',
  endpoint_project_delete: '/projects/delete',

  endpoint_parentTask_get: '/parenttasks',
  endpoint_parentTask_add: '/parenttasks/add',

  endpoint_task_get: '/tasks',
  endpoint_task_add: '/tasks/add',
  endpoint_task_edit: '/tasks/edit',
  endpoint_task_delete: '/tasks/delete'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
