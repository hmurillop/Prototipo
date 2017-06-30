(function(){
  'use strict'
  angular
    .module('myApp')
    .controller('instructorController', instructorController);
    instructorController.$inject=['instructorService'];
    function instructorController(instructorService){

      var vm = this;

      function init(){
        vm.students = instructorService.getStudent();
        vm.student = {};
      }init();

      vm.save = function(pNewStudent){
        instructorService.setStudent(pNewStudent);
        vm.student = {};
        limpiar();
        init();
      }

      vm.getInfo = function(pStudent){
        vm.student.id = pStudent.id;
        vm.student.name = pStudent.name;
        vm.student.secondName = pStudent.secondName;
        vm.student.lastName = pStudent.lastName;
        vm.student.secLastName = pStudent.secLastName;
        vm.student.birthdate = new Date (pStudent.birthdate);
        vm.student.phone = pStudent.phone;
        vm.student.email = pStudent.email;
        vm.student.photo = pStudent.photo;
        vm.student.age = pStudent.age;
        vm.student.weigth = pStudent.weigth;
        vm.student.tournParti = pStudent.tournParti;
        vm.student.belt = pStudent.belt;
        vm.student.category = pStudent.category;
        vm.student.tournWon = pStudent.tournWon;
        vm.student.academy = pStudent.academy;
        vm.student.profesor = pStudent.profesor ;
        // vm.student.state = pStudent.profesor;
      }

      vm.update = function(){
      var studentModified = {
        id: vm.student.id,
        name : vm.student.name,
        secondName : vm.student.secondName,
        lastName : vm.student.lastName,
        secLastName: vm.student.secLastName,
        birthdate: vm.student.birthdate,
        phone: vm.student.phone,
        email: vm.student.email,
        photo: vm.student.photo,
        age : vm.student.age,
        weigth : vm.student.weigth,
        tournParti : vm.student.tournParti,
        belt : vm.student.belt,
        category : vm.student.category,
        tournWon: vm.student.tournWon,
        academy: vm.student.academy,
        profesor: vm.student.profesor
      }
      instructorService.updateStudent(studentModified);
      limpiar();
      init();
    }

      function limpiar(){
        vm.students={}
      }



    }
})();
