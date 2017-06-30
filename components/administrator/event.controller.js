(function(){
  'use strict'
  angular
    .module('myApp')
    .controller('eventController', eventController);
    eventController.$inject = ['eventService'];
    function eventController(eventService){

      var vm = this;

      function init(){
        vm.events = eventService.getEvents();
        vm.event = {};
      }init();

      vm.save = function(pNewEvent){
        eventService.setEvents(pNewEvent);
        vm.event = {};
        clean();
        init();
      }

      vm.getInfo = function(pEvent){
        vm.event.name = pEvent.name;
        vm.event.phone = pEvent.phone;
        vm.event.stateEvent = pEvent.stateEvent;
        vm.event.startDate = pEvent.startDate;
        vm.event.endDate = pEvent.endDate;
        // vm.event.category = pEvent.category;
        vm.event.gender = pEvent.gender;
        vm.event.age = pEvent.age;
        vm.event.weight = pEvent.weight;
        vm.event.specialGuests = pEvent.specialGuests;
        vm.event.charities = pEvent.charities;
        vm.event.capacity = pEvent.capacity;
        vm.event.schedule = pEvent.schedule;
        vm.event.costRegistration = pEvent.costRegistration;
        vm.event.place = pEvent.place;
        vm.event.location = pEvent.location;
        vm.event.brand = pEvent.brand;
      }

      vm.update = function(){
      var eventEdited = {
          name: vm.event.name,
          phone: vm.event.phone,
          stateEvent: vm.event.stateEvent,
          startDate: vm.event.startDate,
          endDate: vm.event.endDate,
          // category: vm.event.category,
          gender: vm.event.gender,
          age: vm.event.age,
          weight: vm.event.weight,
          specialGuests: vm.event.specialGuests,
          charities: vm.event.charities,
          capacity: vm.event.capacity,
          schedule: vm.event.schedule,
          costRegistration: vm.event.costRegistration,
          place: vm.event.place,
          location: vm.event.location,
          brand: vm.event.brand
        }
        eventService.updateEvent(eventEdited);
        clean();
        init();
      }

      function clean(){
        vm.events = {}
      }

    }
})();
