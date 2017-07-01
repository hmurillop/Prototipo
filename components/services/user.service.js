(function(){
	'use strict';
	angular
	.module('myApp')
	.service('userService', userService);

	userService.$inject = ['$log','$http','AuthService']

	function userService($log,$http, AuthService){

		var users = [];

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
