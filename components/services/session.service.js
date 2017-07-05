(function(){
	'use strict';
	angular
	.module('myApp')
	.service('SessionService', SessionService);

	SessionService.$inject = ['$q'];
	/*Funcion para guardar la sesion*/
	function SessionService(){
		var vm = this;

		vm.create = function(user) {
			localStorage.setItem('session', JSON.stringify(user));
		};
		/*Funcion para borrar la sesion*/
		vm.destroy = function(){
			localStorage.removeItem('session');
		};
	};
})()
