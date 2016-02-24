(function(){
	angular.module("app")
		.factory("userResource", ["$resource", userResource]);

	function userResource($resource){
		return $resource("http://189.129.183.156/rest/public/v1/usuarios/:id");
	};
}());
