(function(){
  'use strict'
  angular
    .module('myApp')
    .controller('academyController', academyController);
    academyController.$inject=['academyService'];
    function academyController(academyService){
      var vm = this;
      function init(){
      	vm.academies = academyService.getAcademy();
      	vm.academy = {};
      }init();

      vm.save = function(pAcademy){
        academyService.setAcademy(pAcademy);
        vm.academy = {};
        clear();
        init();
      }

      //Obtiene información de academias del form
      vm.getInfo = function(pAcademy){
        vm.academy.name = pAcademy.name;
        vm.academy.adress = pAcademy.adress;
        vm.academy.phone = pAcademy.phone;
        vm.academy.manager = pAcademy.manager;
        vm.academy.amountTeachers = pAcademy.amountTeachers;
        vm.academy.amountStudents = pAcademy.amountStudents;
      }
      //Modificar academia, pasa el objeto al  academy service
      vm.modifyAcademy = function(){
        var editedAcademy = {
          name: vm.academy.name,
          adress: vm.academy.adress,
          phone: vm.academy.phone,
          manager: vm.academy.manager,
          amountTeachers: vm.academy.amountTeachers,
          amountStudents: vm.academy.amountStudents
        }
        academyService.updateAcademy(editedAcademy); //Se le pasa como parámetro al service
        clear(); //Importante el orden
        init();
      }
      //Clears the form
      function clear(){
        vm.academy = {};
      }
    }
})();
