(function () {
'use strict';

// Menu data servie
angular.module('data')
.service('MenuDataService', MenuDataService);

MenuDataService.$inject = ['$http','UrlCat','UrlItem']
function MenuDataService($http,UrlCat,UrlItem) {
  var service = this;
  service.allCategories;

// Get current categories ( cached )
service.getCurrentCategories = function(){
      console.log("MenuDataService getCurrentCategories()");
      if(service.allCategories == null){
         return service.getAllCategories().then(function(response){
              service.allCategories = response.data;
              console.log("First time",service.allCategories);
              return service.allCategories;
          });
      }
      else{
          console.log("Cached",service.allCategories);
          return service.allCategories;
      }
  }

  // Get all categories
  service.getAllCategories = function () {
    console.log("MenuDataService getAllCategories()");
    return $http(
            {
                method: "GET",
                url: UrlCat
            }
          )
  };

  //Get itens for category (short_name)
  service.getItemsForCategory = function(categoryShortName) {
    console.log("MenuDataService getItemsForCategory()");
    return $http(
            {
                method: "GET",
                url: UrlItem,
                params: { category: categoryShortName }
            }
          )
  };

}

})();
