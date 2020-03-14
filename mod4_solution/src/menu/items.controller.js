(function () {
'use strict';

// Items controller
angular.module('MenuApp')
.controller('ItemsController', ItemsController);

ItemsController.$inject = ['items'];
function ItemsController(items) {
   console.log("Init ItemsController: ");
   var mainlist = this;
   mainlist.items = items.menu_items;
   console.log("items: ",mainlist.items);  
}

})();
