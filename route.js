(function(){
  'use strict';
  angular
  .module('appRoutes', ['ui.router', 'oc.lazyLoad', 'ngMessages','angularCSS','ngCookies'])
  .config(configuration);

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
      css: './css/style.administrator.css',
      resolve: {
       load: ['$ocLazyLoad', function($ocLazyLoad){
        return $ocLazyLoad.load('./components/login/login.controller.js')
       }]
      },
      controller: 'loginController',
      controllerAs: 'vm'
    })

    $urlRouterProvider.otherwise('/landing');
  }

  run.$inject = ['$rootScope', '$location', '$cookies', '$http'];
 function run($rootScope, $location, $cookies, $http) {
     // keep user logged in after page refresh
     $rootScope.globals = $cookies.getObject('globals') || {};
     if ($rootScope.globals.currentUser) {
         $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata;
     }


 }

})();
