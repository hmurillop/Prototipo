(function() {
  'use strict'
  angular
    .module('myApp')
    .service('instructorService', instructorService);

  function instructorService() {
    var students = [];
    var publicAPI = {
      setStudent: _setStudents,
      getStudent: _getStudents,
      updateStudent: _updateStudent,
      valNewStudent: _valNewStudent
    };
    return publicAPI;

    //funcion para enviar datos a local storage
    function _setStudents(pStudent) {
      var studentList = _getStudents();

      studentList.push(pStudent);
      localStorage.setItem('lsStudentList', JSON.stringify(studentList));
    }

    //funcion para obtener datos de localstorage
    function _getStudents() {
      var studentList = JSON.parse(localStorage.getItem('lsStudentList'));
      if (studentList == null) {
        studentList = students;
      }
      return studentList;
    }

    //funcion que actualiza los datos modificados
    function _updateStudent(pstudentModified) {
      var studentList = _getStudents();
      for (var i = 0; i < studentList.length; i++) {
        if (studentList[i].id == pstudentModified.id) {
          studentList[i] = pstudentModified;
        }
      }
      localStorage.setItem('lsStudentList', JSON.stringify(studentList));
    }

    //funcion que permite que no se repitan alumnos
    function _valNewStudent(pStudent){
      var studenList  = _getStudents();
      var studentValidate = false;

      for (var i = 0; i < studenList.length; i++) {
        if (studenList[i].id == pStudent.id) {
          studentValidate = true;
        }
      }
      return studentValidate;
    }




  }
})();
