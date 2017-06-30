(function(){
  'use strict'
  angular
  .module('myApp')
  .service('instructorService', instructorService);

  function instructorService(){
    var students = [];
    var publicAPI = {
      setStudent : _setStudents,
      getStudent : _getStudents,
      updateStudent : _updateStudent
    };
    return publicAPI;

    function _setStudents(pStudent){
        var studentList = _getStudents();

        studentList.push(pStudent);
        localStorage.setItem('lsStudentList', JSON.stringify(studentList));
      }

    function _getStudents(){
    var studentList = JSON.parse(localStorage.getItem('lsStudentList'));
    if(studentList == null){
      studentList = students;
    }
    return studentList;
  }

  function _updateStudent(pstudentModified){
      var studentList = _getStudents();
      for(var i = 0; i < studentList.length; i++){
        if(studentList[i].id == pstudentModified.id){
          studentList[i] = pstudentModified;
        }
      }
      localStorage.setItem('lsStudentList', JSON.stringify(studentList));
    }

  }
})();
