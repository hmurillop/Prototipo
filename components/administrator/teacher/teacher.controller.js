(function(){
  'use strict'
  angular
    .module('myApp')
    .controller('teacherController', teacherController);
    teacherController.$inject = ['teacherService'];
    function teacherController(teacherService){

      var vm = this;

      function init(){
        vm.teachers = teacherService.getTeachers();
        vm.teacher = {};
      }init();

      vm.save = function(pNewTeacher){
        teacherService.setTeachers(pNewTeacher);
        vm.teacher = {};
        clean();
        init();
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

      vm.update = function(){
      var teacherEdited = {
          id: vm.teacher.id,
          name: vm.teacher.name,
          secondName: vm.teacher.secondName,
          surName: vm.teacher.surName,
          secondSurName: vm.teacher.secondSurName,
          birthDate: vm.teacher.birthDate,
          address: vm.teacher.address,
          civilStatus: vm.teacher.civilStatus,
          phone: vm.teacher.phone,
          email: vm.teacher.email
        }
        teacherService.updateTeacher(teacherEdited);
        clean();
        init();
      }

      function clean(){
        vm.teachers = {}
      }

    }
})();
