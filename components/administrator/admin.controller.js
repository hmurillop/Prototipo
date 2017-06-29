(function(){
  'use strict'
  angular
    .module('myApp')
    .controller('adminController', adminController);

    adminController.$inject = ['adminService', 'userService'];
    function adminController(adminService, userService){

      var vm = this;

      function init(){

      }init();




    }
})();
