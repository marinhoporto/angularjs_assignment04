(function () {
'use strict';

// Category controller
angular.module('MenuApp')
.controller('CategoriesController', CategoriesController);

CategoriesController.$inject = ['category'];
function CategoriesController(category) {
   console.log("Init CategoriesController");
   var mainlist = this;
   mainlist.category = category;
   console.log("category_items",mainlist.category);
}

})();
