(function(){
  'use strict'
  angular
    .module('myApp')
    .controller('eventTorneoController', eventTorneoController);
    eventTorneoController.$inject = ['eventTorneoService'];
    function eventTorneoController(eventTorneoService){

      var vm = this;

      function init(){
        vm.eventsTorneo = eventTorneoService.getEventsTorneo();
        vm.eventTorneo = {};
      }init();

      vm.save = function(pNewEventTorneo){
        eventTorneoService.setEventsTorneo(pNewEventTorneo);
        vm.eventTorneo = {};
        clean();
        init();
      }

      vm.getInfo = function(pEventTorneo){
        vm.eventTorneo.name = pEventTorneo.name;
        vm.eventTorneo.phone = pEventTorneo.phone;
        vm.eventTorneo.stateEvent = pEventTorneo.stateEvent;
        vm.eventTorneo.startDate = new Date(pEventTorneo.startDate) ;
        vm.eventTorneo.endDate = new Date(pEventTorneo.endDate);
        vm.eventTorneo.category = pEventTorneo.category;
        vm.eventTorneo.gender = pEventTorneo.gender;
        vm.eventTorneo.age = pEventTorneo.age;
        vm.eventTorneo.weight = pEventTorneo.weight;
        vm.eventTorneo.charities = pEventTorneo.charities;
        vm.eventTorneo.capacity = pEventTorneo.capacity;
        vm.eventTorneo.schedule = pEventTorneo.schedule;
        vm.eventTorneo.costRegistration = pEventTorneo.costRegistration;
        vm.eventTorneo.place = pEventTorneo.place;
        vm.eventTorneo.location = pEventTorneo.location;
        vm.eventTorneo.brand = pEventTorneo.brand;
        vm.eventTorneo.business = pEventTorneo.business;
        vm.eventTorneo.typeSponsor = pEventTorneo.typeSponsor;
        vm.eventTorneo.selectFile = pEventTorneo.selectFile;
      }

      vm.update = function(){
      var eventTorneoEdited = {
          name: vm.eventTorneo.name,
          phone: vm.eventTorneo.phone,
          stateEvent: vm.eventTorneo.stateEvent,
          startDate: vm.eventTorneo.startDate,
          endDate: vm.eventTorneo.endDate,
          category: vm.eventTorneo.category,
          gender: vm.eventTorneo.gender,
          age: vm.eventTorneo.age,
          weight: vm.eventTorneo.weight,
          charities: vm.eventTorneo.charities,
          capacity: vm.eventTorneo.capacity,
          schedule: vm.eventTorneo.schedule,
          costRegistration: vm.eventTorneo.costRegistration,
          place: vm.eventTorneo.place,
          location: vm.eventTorneo.location,
          brand: vm.eventTorneo.brand,
          business: vm.eventTorneo.business,
          typeSponsor: vm.eventTorneo.typeSponsor,
          selectFile: vm.eventTorneo.selectFile
        }
        eventTorneoService.updateEventTorneo(eventTorneoEdited);
        clean();
        init();
      }

      function clean(){
        vm.eventsTorneo = {}
      }

    }
})();
