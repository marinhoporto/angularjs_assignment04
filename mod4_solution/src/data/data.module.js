(function () {
'use strict';

// Data module
angular.module('data', []);

angular.module('data')
.constant('UrlCat', "https://davids-restaurant.herokuapp.com/categories.json")
.constant('UrlItem', "https://davids-restaurant.herokuapp.com/menu_items.json")
.config(function () {
  console.log("Data config fired.");
}).
run(function () {
  console.log("Data run fired.");
});

})();
