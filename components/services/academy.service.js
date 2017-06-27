(function(){
  angular
  .module('myApp')
  .service('adminService', adminService);
  //Información de las academias
  function adminService(){
    var academy = [];
    var publicAPI = {
      setAcademy : _setAcademy,
      getAcademy : _getAcademy,
      updateAcademy : _updateAcademy
    };
    return publicAPI; // todas las funciones que sean llamadas por ajax deben estar debajo del return, para que cuando angular corra el script haga el return y devuelva el api , las funciones debajo del return son privadas y se devuelve el api que es el que contiene las funciones

    //Ingresa información a la lista de academias -Kaleen Li
    function _setAcademy(pName){
      var academyList = _getAcademy();

      academyList.push(pName);
      localStorage.setItem('lsAcademyList', JSON.stringify(academyList));
    }
    //Obtiene información de la lista de academias -Kaleen Li
    function _getAcademy(){
      var academyList = JSON.parse(localStorage.getItem('lsAcademyList'));
      if(academyList == null){
        academyList = academy;
      }
      return academyList;
    }
    //Actualiza la información de la academia. El objeto que se pasó recibe este nombre -Kaleen Li
    function _updateAcademy(pobjAcademy){
      var academyList = _getAcademy();
      for(var i = 0; i < academyList.length; i++){
        if(academyList[i].name == pobjAcademy.name){
          academyList[i] = pobjAcademy;
        }
      }
      localStorage.setItem('lsAcademyList', JSON.stringify(academyList));
    }
  }

})();