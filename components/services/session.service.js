(function(){
	'use strict';
	angular
	.module('myApp')
	.service('SessionService', SessionService);

	SessionService.$inject = ['$q'];

	function SessionService(){
		var vm = this;

		vm.create = function(user) {
			localStorage.setItem('session', JSON.stringify(user));
		};

		vm.destroy = function(){
			localStorage.removeItem('session');
		};
	};
})()
