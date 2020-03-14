(function () {
'use strict';

// Items component 
angular.module('MenuApp')
.component('menuItems', {
  templateUrl: 'src/menu/templates/itemdetails.template.html',
  bindings: {
    items: '<'
  }
});

})();
