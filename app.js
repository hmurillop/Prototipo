(function(){
  angular
  .module('myApp',['appRoutes', 'ngMaterial', 'LocalStorageModule','ngFileUpload'])
  .config(function($mdThemingProvider) {
  		$mdThemingProvider.theme('default')
    		.primaryPalette('indigo')
    		.accentPalette('blue-grey');
        $mdThemingProvider.theme('default').foregroundPalette[3] = "rgba(0,0,0)";

	});
})();
