(function () {
'use strict';

// Items controller
angular.module('MenuApp')
.controller('ItemsController', ItemsController);

ItemsController.$inject = ['MenuDataService','$stateParams'];
function ItemsController(MenuDataService,$stateParams) {
   console.log("Init ItemsController: ");
   var mainlist = this;

   // Get items
   MenuDataService.getItemsForCategory($stateParams.itemId)
     .then(function (return_data){
           mainlist.items = return_data.data.menu_items;
           console.log("items: ",mainlist.items);
     },
     function(error){
            console.log("error",error);
     });
}

})();
