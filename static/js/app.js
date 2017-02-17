var myApp = angular.module('myApp', ['ionic']);

myApp.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
	$stateProvider.state('tabs', {
		'url': '/tab',
		'templateUrl': 'temp/tabs.html'
	}).state('tabs.index', {
		'url': '/index',
		'views': {
			index: {
				'templateUrl': 'temp/index.html'
			}
		}
	}).state('tabs.login', {
		'url': '/login',
		'views': {
			index: {
				'templateUrl': 'temp/login.html'
			}
		}
	}).state('tabs.regist', {
		'url': '/regist',
		'views': {
			index: {
				'templateUrl': 'temp/regist.html'
			}
		}
	}).state('tabs.regist2', {
		'url': '/regist2',
		'views': {
			index: {
				'templateUrl': 'temp/regist2.html'
			}
		}
	}).state('tabs.regist3', {
		'url': '/regist3',
		'views': {
			index: {
				'templateUrl': 'temp/regist3.html'
			}
		}
	}).state('tabs.forgetPassword', {
		'url': '/forgetPassword',
		'views': {
			index: {
				'templateUrl': 'temp/forgetPassword.html'
			}
		}
	}).state('tabs.forgetPassword2', {
		'url': '/forgetPassword2',
		'views': {
			index: {
				'templateUrl': 'temp/forgetPassword2.html'
			}
		}
	}).state('tabs.forgetPassword3', {
		'url': '/forgetPassword3',
		'views': {
			index: {
				'templateUrl': 'temp/forgetPassword3.html'
			}
		}
	});

	$urlRouterProvider.otherwise('tab/index');
}]);

myApp.controller('myCtrl', ['$scope', function($scope) {
	
}]);

myApp.controller('indexCtrl', ['$scope', function($scope) {
	$scope.imgs = ["img/w1.jpg", "img/w2.jpg", "img/w3.jpg"];
}]);

myApp.controller('loginCtrl', ['$scope', '$state', function($scope, $state) {
	$scope.back = function() {
		$state.go('tabs.index');
	};
}]);

myApp.controller('registCtrl', ['$scope', '$state', function($scope, $state) {
	$scope.back = function() {
		$state.go('tabs.login');
	};
}]);

myApp.controller('registCtrl2', ['$scope', '$state', function($scope, $state) {
	$scope.back = function() {
		$state.go('tabs.regist');
	};
}]);

myApp.controller('registCtrl3', ['$scope', '$state', function($scope, $state) {
	$scope.back = function() {
		$state.go('tabs.regist2');
	};
}]);

myApp.controller('forgetPasswordCtrl', ['$scope', '$state', function($scope, $state) {
	$scope.back = function() {
		$state.go('tabs.login');
	};
}]);

myApp.controller('forgetPasswordCtrl2', ['$scope', '$state', function($scope, $state) {
	$scope.back = function() {
		$state.go('tabs.forgetPassword');
	};
}]);

myApp.controller('forgetPasswordCtrl3', ['$scope', '$state', function($scope, $state) {
	$scope.back = function() {
		$state.go('tabs.forgetPassword2');
	};
}]);