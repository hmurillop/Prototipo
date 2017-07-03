(function(){
  'use strict'
  angular
  .module('myApp')
  .service('teacherService', teacherService);

  function teacherService(){
    var teachers = [];
    var publicAPI = {
      setTeachers : _setTeachers,
      getTeachers : _getTeachers,
      updateTeacher : _updateTeacher
    };
    return publicAPI;

    function _setTeachers(pTeacher){
        var teachersList = _getTeachers();

        teachersList.push(pTeacher);
        localStorage.setItem('lsTeachersList', JSON.stringify(teachersList));
      }

    function _getTeachers(){
    var teachersList = JSON.parse(localStorage.getItem('lsTeachersList'));
    if(teachersList == null){
      teachersList = teachers;
    }
    return teachersList;
  }

  function _updateTeacher(pTeacherModified){
      var teachersList = _getTeachers();
      for(var i = 0; i < teachersList.length; i++){
        if(teachersList[i].id === pTeacherModified.id){
          teachersList[i] = pTeacherModified;
        }
      }
      localStorage.setItem('lsTeachersList', JSON.stringify(teachersList));
    }

  }
})();