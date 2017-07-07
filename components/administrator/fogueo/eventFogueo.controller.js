(function(){
  'use strict'
  angular
    .module('myApp')
    .controller('eventFogueoController', eventFogueoController);
    eventFogueoController.$inject = ['eventFogueoService'];
    function eventFogueoController(eventFogueoService){

      var vm = this;

      function init(){
        vm.eventsFogueo = eventFogueoService.getEventsFogueo();
        vm.eventFogueo = {};
      }init();

      vm.save = function(pNewEventFogueo){
        eventFogueoService.setEventsFogueo(pNewEventFogueo);
        vm.eventFogueo = {};
        clean();
        init();
      }

      vm.getInfo = function(pEventFogueo){
        vm.eventFogueo.name = pEventFogueo.name;
        vm.eventFogueo.phone = pEventFogueo.phone;
        vm.eventFogueo.stateEvent = pEventFogueo.stateEvent;
        vm.eventFogueo.startDate = new Date(pEventFogueo.startDate);
        vm.eventFogueo.endDate = new Date(pEventFogueo.endDate);
        vm.eventFogueo.gender = pEventFogueo.gender;
        vm.eventFogueo.age = pEventFogueo.age;
        vm.eventFogueo.weight = pEventFogueo.weight;
        vm.eventFogueo.charities = pEventFogueo.charities;
        vm.eventFogueo.capacity = pEventFogueo.capacity;
        vm.eventFogueo.sponsor = pEventFogueo.sponsor;
        vm.eventFogueo.schedule = pEventFogueo.schedule;
        vm.eventFogueo.costRegistration = pEventFogueo.costRegistration;
        vm.eventFogueo.place = pEventFogueo.place;
        vm.eventFogueo.location = pEventFogueo.location;
      }

      vm.update = function(){
      var eventFogueoEdited = {
          name: vm.eventFogueo.name,
          phone: vm.eventFogueo.phone,
          stateEvent: vm.eventFogueo.stateEvent,
          startDate: vm.eventFogueo.startDate,
          endDate: vm.eventFogueo.endDate,
          gender: vm.eventFogueo.gender,
          age: vm.eventFogueo.age,
          weight: vm.eventFogueo.weight,
          charities: vm.eventFogueo.charities,
          charities: vm.eventFogueo.charities,
          sponsor: vm.eventFogueo.sponsor,
          schedule: vm.eventFogueo.schedule,
          costRegistration: vm.eventFogueo.costRegistration,
          place: vm.eventFogueo.place,
          location: vm.eventFogueo.location
        }
        eventFogueoService.updateEventFogueo(eventFogueoEdited);
        clean();
        init();
      }

      function clean(){
        vm.eventsFogueo = {}
      }

    }
})();
