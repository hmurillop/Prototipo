(function(){
  angular
  .module('myApp')
  .service('academyService', academyService);
  //Información de las academias
  function academyService(){
    var academy = [];
    var publicAPI = {
      setAcademy : _setAcademy,
      getAcademy : _getAcademy,
      updateAcademy : _updateAcademy
    };
    return publicAPI; // todas las funciones que sean llamadas por ajax deben estar debajo del return, para que cuando angular corra el script haga el return y devuelva el api , las funciones debajo del return son privadas y se devuelve el api que es el que contiene las funciones

    //Ingresa información a la lista de academias
    function _setAcademy(pAcademy){
      var academyList = _getAcademy();
      var position = searchAcademy(pAcademy)
      if (position == -1) {
        academyList.push(pAcademy);
      localStorage.setItem('lsAcademyList', JSON.stringify(academyList));
      }
    }

    //Busca si la academia está repetida
    function searchAcademy(pAcademy){
      var academyList = _getAcademy();
      var position = -1;
      for (var i = 0; i < academyList.length; i++) {
        if (pAcademy.name == academyList[i].name) {
          position = i;
        }
      }
      return position;
    }
    //Obtiene información de la lista de academias
    function _getAcademy(){
      var academyList = JSON.parse(localStorage.getItem('lsAcademyList'));
      if(academyList == null){
        academyList = academy;
      }
      return academyList;
    }
    //Actualiza la información de la academia. El objeto que se pasó recibe este nombre
    function _updateAcademy(pAcademy){
      var academyList = _getAcademy();
      for(var i = 0; i < academyList.length; i++){
        if(academyList[i].name == pAcademy.name){
          academyList[i] = pAcademy;
        }
      }
      localStorage.setItem('lsAcademyList', JSON.stringify(academyList));
    }
  }

})();
