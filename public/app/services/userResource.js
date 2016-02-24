(function(){
	angular.module("app")
		.factory("userResource", ["$resource", userResource]);

	function userResource($resource){
		return $resource("http://localhost/rest/public/v1/usuarios/:id");
	};
}());