(function(){
  'use strict'
  angular
  .module('myApp')
  .service('eventService', eventService);

  function eventService(){
    var events = [];
    var publicAPI = {
      setEvents : _setEvents,
      getEvents : _getEvents,
      updateEvent : _updateEvent
    };
    return publicAPI;

    function _setEvents(pEvent){
        var eventsList = _getEvents();

        eventsList.push(pEvent);
        localStorage.setItem('lsEventsList', JSON.stringify(eventsList));
      }

    function _getEvents(){
    var eventsList = JSON.parse(localStorage.getItem('lsEventsList'));
    if(eventsList == null){
      eventsList = events;
    }
    return eventsList;
  }

  function _updateEvent(pEventModified){
      var eventsList = _getEvents();
      for(var i = 0; i < eventsList.length; i++){
        if(eventsList[i].name === pEventModified.name){
          eventsList[i] = pEventModified;
        }
      }
      localStorage.setItem('lsEventsList', JSON.stringify(eventsList));
    }

  }
})();
