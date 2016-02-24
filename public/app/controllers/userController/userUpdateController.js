(function(){
	angular.module("app")
		.controller("UserUpdateController", ["$scope", "userResource", "$stateParams", "$location", UserUpdateController]);

	function UserUpdateController($scope, userResource, $stateParams, $location){
		$scope.readonly = true;
		$scope.edit = function(){
			$scope.readonly = !$scope.readonly;	
			if ($scope.readonly == true) {
				$scope.toast();
			};
		};

		$scope.cancelEdit = function(){
			userResource.get({id: $stateParams.id},function(data){
					$scope.user = "";
					$scope.user = data;
					console.log(data);
			});
		};

		$scope.toast = function(){
			toastr.success('Guardadro');
		}

		$scope.toastCancel = function(){
			toastr.info('Cancelado');
			$location.url("/usuarios/"+$stateParams.id+"/info");
		}
	};
}());