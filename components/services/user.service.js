(function(){
	'use strict';
	angular
	.module('myApp')
	.service('userService', userService);

	userService.$inject = ['$log','$http']

	function userService($log,$http){
		/*Objeto con datos quemados*/
		var users = [
<<<<<<< HEAD
			{email : 'admin@paradigm.com', password : 'admin'},
			{email : 'asist@paragigm.com', password : 'asist'}
=======
			{username : 'Administrador', email : 'admin@paradigm.com', password : 'admin'},
			{username : 'Asistente', email : 'asist@paragigm.com', password : 'asist'}
>>>>>>> origin/Kevin
		];

		var publicAPI ={
			addUser : _addUser,
			getUsers: _getUsers
		};
		return publicAPI;

		function _addUser(newUser){
			var userList = _getUsers();

			userList.push(newUser);

			localStorage.setItem('lsUsersList', JSON.stringify(userList));
		};

		function _getUsers(){
			var userList = JSON.parse(localStorage.getItem('lsUsersList'));

			if (userList == null){
				userList = users;
			}

			return userList;
		}
	};
})();
