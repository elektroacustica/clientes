(function(){
	angular.module("app")

		.config(["$stateProvider", "$urlRouterProvider", Route]);

	function Route($stateProvider, $urlRouterProvider){
		
		$urlRouterProvider.when("", "/");
		$urlRouterProvider.otherwise("/404");

		$stateProvider
			.state("login", {
				url: "/login",
				templateUrl: "public/app/templates/login.html"
			})
			.state("home", {
				url: "/",
				templateUrl: "public/app/templates/home.html"
			})

			.state("404", {
				url: "/404",
				templateUrl: "public/app/templates/404.html"
			})

			.state("user", {
				url: "/usuarios", 
				templateUrl: "public/app/templates/users/index.html",
				controller: "UserController"
			})

			.state("userShow", {
				url: "/usuarios/:id", 
				templateUrl: "public/app/templates/users/show.html",
				controller: "UserDetailController",
			})

			.state("userShow.info", {
				url: "/info", 
				templateUrl: "public/app/templates/users/edit/info.html",
				controller: "UserUpdateController",
			})

			.state("userShow.password", {
				url: "/password", 
				templateUrl: "public/app/templates/users/edit/password.html",
				controller: "UserUpdateController",
			})

			.state("userShow.pay", {
				url: "/pagos", 
				templateUrl: "public/app/templates/users/edit/pay.html",
				controller: "UserDetailController",
			})

			.state("userShow.licence", {
				url: "/licencia", 
				templateUrl: "public/app/templates/users/edit/licence.html",
				controller: "UserDetailController",
			})
	}

}());