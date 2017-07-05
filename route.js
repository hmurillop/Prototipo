(function(){
  'use strict';
  angular
  .module('appRoutes', ['ui.router','oc.lazyLoad','ngMessages','angularCSS','ngFileUpload'])
  .config(configuration);

  configuration.$inject = ['$stateProvider','$urlRouterProvider'];

  function configuration($stateProvider,$urlRouterProvider){
    $stateProvider
    // Estado del Landing PAge
    .state('landing',{
      url: '/landing',
      templateUrl: 'components/landing/landing.view.html',
      css: './css/style.landing.css',
      resolve: {
       load: ['$ocLazyLoad', function($ocLazyLoad){
        return $ocLazyLoad.load('./components/landing/landing.controller.js')
       }]
      },
      controller: 'landingController',
      controllerAs: 'vm'
    })
    // Estado del administrador
    .state('admin',{
      url: '/admin',
      templateUrl: 'components/administrator/admin.view.html',
      css: './css/style.administrator.css',
      resolve: {
       load: ['$ocLazyLoad', function($ocLazyLoad){
        return $ocLazyLoad.load('./components/administrator/admin/admin.controller.js')
       }]
      },
      controller: 'adminController',
      controllerAs: 'vm'
    })
    // Estado de registro de alumnos
    .state('instructor',{
      url: '/instructor',
      templateUrl: './components/instructor/instructor.view.html',
      css: './css/style.instructor.css',
      resolve: {
        load: ['$ocLazyLoad', function($ocLazyLoad){
 		    return $ocLazyLoad.load('./components/instructor/instructor.controller.js')
 		   }]
      },
      controller: 'instructorController',
      controllerAs: 'vm'
    })//Cierre del estado "instructor"
    // Estado del login
    .state('login',{
      url: '/login',
      templateUrl: 'components/login/login.view.html',
      css: './css/style.login.css',
      resolve: {
       load: ['$ocLazyLoad', function($ocLazyLoad){
        return $ocLazyLoad.load('./components/login/login.controller.js')
       }]
      },
      controller: 'loginController',
      controllerAs: 'vm'
    })
    // Estado del evento
    .state('event',{
      url: '/event',
      templateUrl: 'components/administrator/event/event.view.html',
      css: './css/style.event.css',
      resolve: {
       load: ['$ocLazyLoad', function($ocLazyLoad){
        return $ocLazyLoad.load('./components/administrator/event/event.controller.js')
       }]
      },
      controller: 'eventController',
      controllerAs: 'vm'
    })
    //Estado del torneo
    .state('eventTorneo',{
      url: '/eventTorneo',
      templateUrl: 'components/administrator/torneo/eventTorneo.view.html',
      css: './css/style.event.css',
      resolve: {
        load: ['$ocLazyLoad', function($ocLazyLoad){
          return $ocLazyLoad.load('./components/administrator/torneo/eventTorneo.controller.js')
        }]
      },
      controller: 'eventTorneoController',
      controllerAs: 'vm'
    })





    $urlRouterProvider.otherwise('/landing');
  }//Cierre de la function configuration

})();
