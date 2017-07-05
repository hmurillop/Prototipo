(function(){
  'use strict'
  angular
    .module('myApp')
    .controller('eventController', eventController);
    eventController.$inject = ['eventService','ImageService','Upload'];
    function eventController(eventService,ImageService,Upload){

      var vm = this;
      vm.cloudObj = ImageService.getConfiguration();

      function init(){
        vm.events = eventService.getEvents();
        vm.event = {};
      }init();

      vm.preSave = function(pNewEvent){
        vm.cloudObj.data.file = document.getElementById("photo").files[0];
        Upload.upload(vm.cloudObj)
          .success(function(data){
            pNewEvent.photo = data.url;
            vm.save(pNewEvent);
          });
      }

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
        vm.event.business = pEvent.business;
        vm.event.typeSponsor = pEvent.typeSponsor;
        vm.event.brand = pEvent.brand;
        vm.event.photo = pEvent.photo;
      }

      vm.update = function(){
      var eventEdited = {
          name: vm.event.name,
          phone: vm.event.phone,
          stateEvent: vm.event.stateEvent,
          startDate: vm.event.startDate,
          endDate: vm.event.endDate,
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
          brand: vm.event.brand,
          business: vm.event.business,
          typeSponsor: vm.event.typeSponsor,
          photo: vm.event.photo
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
