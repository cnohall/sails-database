/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  '/': { view: 'pages/homepage' },

  'post /vendors/list' : { view : 'vendors/list'},
  'get /vendors/add' : { view : 'vendors/add'},
  'get /vendors/edit/:id': 'VendorsController.edit',
  'post /vendors/update/:id': 'VendorsController.update',

  'post /process/list' : { view : 'processes/list'},
  'get /process/add' : { view : 'processes/add'},
  'get /process/edit/:id': 'ProcessController.edit',
  'post /process/update/:id': 'ProcessController.update',

  'post /materials/list' : { view : 'materials/list'},
  'get /materials/add' : { view : 'materials/add'},
  'get /materials/edit/:id': 'MaterialsController.edit',
  'post /materials/update/:id': 'MaterialsController.update',


  /***************************************************************************
  *                                                                          *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
  ***************************************************************************/


};
