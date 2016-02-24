(function(){
	angular.module("app")
		.controller("UserDetailController", ["$scope", "userResource", "$stateParams", "$location", UserDetailController]);

	function UserDetailController($scope, userResource, $stateParams, $location){

		userResource.get({id: $stateParams.id},function(data){
				$scope.user = data;
				$scope.user.nombres = data.nombres + " " + data.apellido_paterno + " " + data.apellido_materno;
				$scope.user.img = "avatar2";
		});
	};
}());