(function(){
  'use strict'
  angular
  .module('myApp')
  .service('reserveService', reserveService);

  function reserveService(){

    var publicAPI = {
      setReserve: _setReserves,
    };
    return publicAPI;

    function _setReserves(pReserve){
      var totalEntradas = 100;
      var entradasRestantes = 0;

      if (pReserve.ticketReserv =! 0) {
        entradasRestantes = totalEntradas - pReserve.ticketReserv;
        console.log(entradasRestantes);
      }
      console.log('NO FUNCIONA');
    }


  }
})();
