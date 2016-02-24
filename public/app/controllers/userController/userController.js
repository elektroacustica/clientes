(function(){
	angular.module("app")
		.controller("UserController", ["$scope", "userResource", UserController]);

	function UserController($scope, userResource){
		userResource.query(function(data){
			$scope.users = data;
		});
	};
}());