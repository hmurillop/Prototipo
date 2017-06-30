(function(){
  'use strict'
  angular
  .module('myApp')
  .service('eventFogueoService', eventFogueoService);

  function eventFogueoService(){
    var eventsFogueo = [];
    var publicAPI = {
      setEventsFogueo : _setEventsFogueo,
      getEventsFogueo : _getEventsFogueo,
      updateEventFogueo : _updateEventFogueo
    };
    return publicAPI;

    function _setEventsFogueo(pEventFogueo){
        var eventsListFogueo = _getEventsFogueo();

        eventsListFogueo.push(pEventFogueo);
        localStorage.setItem('lseventsListFogueo', JSON.stringify(eventsListFogueo));
      }

    function _getEventsFogueo(){
    var eventsListFogueo = JSON.parse(localStorage.getItem('lseventsListFogueo'));
    if(eventsListFogueo == null){
      eventsListFogueo = eventsFogueo;
    }
    return eventsListFogueo;
  }

  function _updateEventFogueo(pEventModifiedFogueo){
      var eventsListFogueo = _getEventsFogueo();
      for(var i = 0; i < eventsListFogueo.length; i++){
        if(eventsListFogueo[i].name === pEventModifiedFogueo.name){
          eventsListFogueo[i] = pEventModifiedFogueo;
        }
      }
      localStorage.setItem('lseventsListFogueo', JSON.stringify(eventsListFogueo));
    }

  }
})();
