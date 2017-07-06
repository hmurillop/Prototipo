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

    .state('eventFogueo',{
      url: '/eventFogueo',
      templateUrl: 'components/administrator/fogueo/eventFogueo.view.html',
      css: './css/style.event.css',
      resolve: {
       load: ['$ocLazyLoad', function($ocLazyLoad){
        return $ocLazyLoad.load('./components/administrator/fogueo/eventFogueo.controller.js')
       }]
      },
      controller: 'eventFogueoController',
      controllerAs: 'vm'
    })

    .state('academy',{
      url: '/academy',
      templateUrl: 'components/administrator/academy/academy.view.html',
      css: './css/style.academy.css',
      resolve: {
       load: ['$ocLazyLoad', function($ocLazyLoad){
        return $ocLazyLoad.load('./components/administrator/academy/academy.controller.js')
       }]
      },
      controller: 'academyController',
      controllerAs: 'vm'
    })

    .state('teacher',{
      url: '/teacher',
      templateUrl: 'components/administrator/teacher/teacher.view.html',
      css: './css/style.teacher.css',
      resolve: {
       load: ['$ocLazyLoad', function($ocLazyLoad){
        return $ocLazyLoad.load('./components/administrator/teacher/teacher.controller.js')
       }]
      },
      controller: 'teacherController',
      controllerAs: 'vm'
    })

    .state('profileInst',{
      url: '/profileInst',
      templateUrl: 'components/profiles/profileInst.view.html',
      css: './css/style.profile.css',
      resolve: {
        load: ['$ocLazyLoad', function($ocLazyLoad){
          return $ocLazyLoad.load('./components/profiles/profileInst.controller.js')
        }]
      },
      controller: 'profileInstController',
      controllerAs: 'vm'
    })

    .state('profileStud',{
      url: '/profileStud',
      templateUrl: 'components/profiles/profileStud.view.html',
      css: './css/style.profile.css',
      resolve: {
        load: ['$ocLazyLoad', function($ocLazyLoad){
          return $ocLazyLoad.load('./components/profiles/profileStud.controller.js')
        }]
      },
      controller: 'profileStudController',
      controllerAs: 'vm'
    })

    .state('reserve',{
      url: '/reserve',
      templateUrl: 'components/reservation/reserve.view.html',
      css: './css/style.reserve.css',
      resolve: {
       load: ['$ocLazyLoad', function($ocLazyLoad){
        return $ocLazyLoad.load('./components/reservation/reserve.controller.js')
       }]
      },
      controller: 'reserveController',
      controllerAs: 'vm'
    })

    // Estado del administrador
    .state('administrator',{
      url: '/administrator',
      templateUrl: 'components/administrator/admin/admin.view.html',
      css: './css/style.administrator.css',
      resolve: {
       load: ['$ocLazyLoad', function($ocLazyLoad){
        return $ocLazyLoad.load('./components/administrator/admin/admin.controller.js')
       }]
      },
      controller: 'adminController',
      controllerAs: 'vm'
    })

    $urlRouterProvider.otherwise('/landing');
  }//Cierre de la function configuration

})();
