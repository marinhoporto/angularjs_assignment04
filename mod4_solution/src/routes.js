(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/menu/templates/home.template.html'
  })

  // Menu category list page
  .state('categories', {
    url: '/categories',
    templateUrl: 'src/menu/templates/main_menucategories.template.html',
    controller: 'CategoriesController as menu_categories',
    resolve: {
         category: ['MenuDataService', function (MenuDataService) {
                return MenuDataService.getCurrentCategories();
        }]
     }
  })

  // Menu item list page*
  .state('items', {
    url: '/item-detail/{itemId}',
    templateUrl: 'src/menu/templates/main_itemdetails.template.html',
    controller: "ItemsController as itemsDetail",
    resolve: {
         items: ['$stateParams','MenuDataService', function ($stateParams,MenuDataService) {
         return MenuDataService.getItemsForCategory($stateParams.itemId)
         .then(function (return_data){
              return return_data.data;
         });
       }]
     }
  });

}

})();
