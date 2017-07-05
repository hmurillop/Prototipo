(function(){
  'use strict';
  angular
  .module('appRoutes', ['ui.router', 'oc.lazyLoad','ngMessages','angularCSS','ngPassword','ngFileUpload'])
  .config(configuration)
  configuration.$inject = ['$stateProvider','$urlRouterProvider'];

  function configuration($stateProvider,$urlRouterProvider){
    $stateProvider
    .state('instructor',{
      url: '/instructor',
      templateUrl: 'components/instructor/instructor.view.html',
      css: './css/style.instructor.css',
      resolve: {
		   load: ['$ocLazyLoad', function($ocLazyLoad){
		    return $ocLazyLoad.load('./components/instructor/instructor.controller.js')
		   }]
		  },
      controller: 'instructorController',
      controllerAs: 'vm'
    })

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

    .state('admin',{
      url: '/admin',
      templateUrl: 'components/administrator/admin.view.html',
      css: './css/style.administrator.css',
      resolve: {
       load: ['$ocLazyLoad', function($ocLazyLoad){
        return $ocLazyLoad.load('./components/administrator/admin.controller.js')
       }]
      },
      controller: 'adminController',
      controllerAs: 'vm'
    })

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

    .state('event',{
      url: '/event',
      templateUrl: 'components/administrator/event.view.html',
      css: './css/style.event.css',
      resolve: {
       load: ['$ocLazyLoad', function($ocLazyLoad){
        return $ocLazyLoad.load('./components/administrator/event.controller.js')
       }]
      },
      controller: 'eventController',
      controllerAs: 'vm'
    })

    .state('eventTorneo',{
      url: '/eventTorneo',
      templateUrl: 'components/administrator/eventTorneo.view.html',
      css: './css/style.event.css',
      resolve: {
       load: ['$ocLazyLoad', function($ocLazyLoad){
        return $ocLazyLoad.load('./components/administrator/eventTorneo.controller.js')
       }]
      },
      controller: 'eventTorneoController',
      controllerAs: 'vm'
    })

    .state('eventFogueo',{
      url: '/eventFogueo',
      templateUrl: 'components/administrator/eventFogueo.view.html',
      css: './css/style.event.css',
      resolve: {
       load: ['$ocLazyLoad', function($ocLazyLoad){
        return $ocLazyLoad.load('./components/administrator/eventFogueo.controller.js')
       }]
      },
      controller: 'eventFogueoController',
      controllerAs: 'vm'
    })

    .state('academy',{
      url: '/academy',
      templateUrl: 'components/administrator/academy.view.html',
      css: './css/style.academy.css',
      resolve: {
       load: ['$ocLazyLoad', function($ocLazyLoad){
        return $ocLazyLoad.load('./components/administrator/academy.controller.js')
       }]
      },
      controller: 'academyController',
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

    .state('teacher',{
      url: '/teacher',
      templateUrl: 'components/administrator/teacher.view.html',
      css: './css/style.teacher.css',
      resolve: {
       load: ['$ocLazyLoad', function($ocLazyLoad){
        return $ocLazyLoad.load('./components/administrator/teacher.controller.js')
       }]
      },
      controller: 'teacherController',
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

    $urlRouterProvider.otherwise('/landing');
  }

})();
