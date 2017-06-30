(function(){
  'use strict'
  angular
  .module('myApp')
  .service('eventTorneoService', eventTorneoService);

  function eventTorneoService(){
    var eventsTorneo = [];
    var publicAPI = {
      setEventsTorneo : _setEventsTorneo,
      getEventsTorneo : _getEventsTorneo,
      updateEventTorneo : _updateEventTorneo
    };
    return publicAPI;

    function _setEventsTorneo(pEventTorneo){
        var eventsListTorneo = _getEventsTorneo();

        eventsListTorneo.push(pEventTorneo);
        localStorage.setItem('lseventsListTorneo', JSON.stringify(eventsListTorneo));
      }

    function _getEventsTorneo(){
    var eventsListTorneo = JSON.parse(localStorage.getItem('lseventsListTorneo'));
    if(eventsListTorneo == null){
      eventsListTorneo = eventsTorneo;
    }
    return eventsListTorneo;
  }

  function _updateEventTorneo(pEventTorneoModified){
      var eventsListTorneo = _getEventsTorneo();
      for(var i = 0; i < eventsListTorneo.length; i++){
        if(eventsListTorneo[i].name === pEventTorneoModified.name){
          eventsListTorneo[i] = pEventTorneoModified;
        }
      }
      localStorage.setItem('lseventsListTorneo', JSON.stringify(eventsListTorneo));
    }

  }
})();
