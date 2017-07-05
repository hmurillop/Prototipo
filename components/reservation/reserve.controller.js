(function(){
  'use strict'
  angular
    .module('myApp')
    .controller('reserveController', reserveController);
    function reserveController(reserveService){

      var vm = this;

      function init(){

      }init();


      vm.reservation = function(pReserve){
        reserveService.setReserve(pReserve);
      }

    }
})();
