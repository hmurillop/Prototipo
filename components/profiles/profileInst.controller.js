(function(){
  'use strict';
  angular
  .module('myApp')
  .controller('profileInstController', profileInstController);
  teacherService.$inject=['teacherService'];
  function profileInstController(teacherService){

    var vm = this;

    function init(){
      vm.teachers = teacherService.getTeachers();
      vm.teacher = {};
      }init();
    }

    vm.getInfo = function(pTeacher){
        vm.teacher.id = pTeacher.id;
        vm.teacher.name = pTeacher.name;
        vm.teacher.secondName = pTeacher.secondName;
        vm.teacher.surName = pTeacher.surName;
        vm.teacher.secondSurName = pTeacher.secondSurName;
        vm.teacher.birthDate = pTeacher.birthDate;
        vm.teacher.address = pTeacher.address;
        vm.teacher.civilStatus = pTeacher.civilStatus;
        vm.teacher.phone = pTeacher.phone;
        vm.teacher.email = pTeacher.email;
      }
})();