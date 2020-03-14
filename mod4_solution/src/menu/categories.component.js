(function () {
'use strict';

// Category component 
angular.module('MenuApp')
.component('menuCategories', {
  templateUrl: 'src/menu/templates/menucategories.template.html',
  bindings: {
    category: '<'
  },

});

})();
