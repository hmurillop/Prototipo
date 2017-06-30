(function(){
  angular
  .module('myApp',['appRoutes', 'ngMaterial'])
  .config(function($mdThemingProvider) {
  		$mdThemingProvider.theme('default')
    		.primaryPalette('indigo')
    		.accentPalette('blue-grey');
	});
})();
