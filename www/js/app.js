var myApp = angular.module('myApp', ['ionic']);

myApp.config(['$stateProvider', '$urlRouterProvider', '$ionicConfigProvider', function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

	$ionicConfigProvider.platform.ios.tabs.style('standard');
	$ionicConfigProvider.platform.ios.tabs.position('bottom');
	$ionicConfigProvider.platform.android.tabs.style('standard');
	$ionicConfigProvider.platform.android.tabs.position('standard');
	  	$ionicConfigProvider.platform.android.navBar.alignTitle('center');

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
	}).state('tabs.accountMangement', {
		'url': '/accountMangement',
		'views': {
			index: {
				'templateUrl': 'temp/accountMangement.html'
			}
		}
	}).state('tabs.erweima', {
		'url': '/erweima',
		'views': {
			index: {
				'templateUrl': 'temp/erweima.html'
			}
		}
	}).state('tabs.erweima2', {
		'url': '/erweima2',
		'views': {
			index: {
				'templateUrl': 'temp/erweima2.html'
			}
		}
	}).state('tabs.erweima3', {
		'url': '/erweima3',
		'views': {
			index: {
				'templateUrl': 'temp/erweima3.html'
			}
		}
	}).state('tabs.erweima4', {
		'url': '/erweima4',
		'views': {
			index: {
				'templateUrl': 'temp/erweima4.html'
			}
		}
	}).state('tabs.accountSearch', {
		'url': '/accountSearch',
		'views': {
			index: {
				'templateUrl': 'temp/accountSearch.html'
			}
		}
	}).state('tabs.deepmsg', {
		'url': '/deepmsg',
		'views': {
			index: {
				'templateUrl': 'temp/deepmsg.html'
			}
		}
	}).state('tabs.deepmsg2', {
		'url': '/deepmsg2',
		'views': {
			index: {
				'templateUrl': 'temp/deepmsg2.html'
			}
		}
	}).state('tabs.msg', {
		'url': '/msg',
		'views': {
			index: {
				'templateUrl': 'temp/msg.html'
			}
		}
	}).state('tabs.sonMsg', {
		'url': '/sonMsg',
		'views': {
			index: {
				'templateUrl': 'temp/sonMsg.html'
			}
		}
	}).state('tabs.addCard', {
		'url': '/addCard',
		'views': {
			index: {
				'templateUrl': 'temp/addCard.html'
			}
		}
	}).state('tabs.addCard2', {
		'url': '/addCard2',
		'views': {
			index: {
				'templateUrl': 'temp/addCard2.html'
			}
		}
	}).state('tabs.addCard3', {
		'url': '/addCard3',
		'views': {
			index: {
				'templateUrl': 'temp/addCard3.html'
			}
		}
	}).state('tabs.money', {
		'url': '/money',
		'views': {
			money: {
				'templateUrl': 'temp/money.html'
			}
		}
	}).state('tabs.transferMoney', {
		'url': '/transferMoney',
		'views': {
			money: {
				'templateUrl': 'temp/transferMoney.html'
			}
		}
	}).state('tabs.getMoney', {
		'url': '/getMoney',
		'views': {
			money: {
				'templateUrl': 'temp/getMoney.html'
			}
		}
	}).state('tabs.getPerson', {
		'url': '/getPerson',
		'views': {
			money: {
				'templateUrl': 'temp/getPerson.html'
			}
		}
	}).state('tabs.handlePassword', {
		'url': '/handlePassword',
		'views': {
			money: {
				'templateUrl': 'temp/handlePassword.html'
			}
		}
	}).state('tabs.paySuccess', {
		'url': '/paySuccess',
		'views': {
			money: {
				'templateUrl': 'temp/paySuccess.html'
			}
		}
	}).state('tabs.good', {
		'url': '/good',
		'views': {
			good: {
				'templateUrl': 'temp/good.html'
			}
		}
	}).state('tabs.tonggao', {
		'url': '/tonggao',
		'views': {
			good: {
				'templateUrl': 'temp/tonggao.html'
			}
		}
	}).state('tabs.aboutBank', {
		'url': '/aboutBank',
		'views': {
			good: {
				'templateUrl': 'temp/aboutBank.html'
			}
		}
	}).state('tabs.suggestion', {
		'url': '/suggestion',
		'views': {
			good: {
				'templateUrl': 'temp/suggestion.html'
			}
		}
	}).state('tabs.suggestionSuccess', {
		'url': '/suggestionSuccess',
		'views': {
			good: {
				'templateUrl': 'temp/suggestionSuccess.html'
			}
		}
	}).state('tabs.tonggao2', {
		'url': '/tonggao2',
		'views': {
			good: {
				'templateUrl': 'temp/tonggao2.html'
			}
		}
	}).state('tabs.markets', {
		'url': '/markets',
		'views': {
			markets: {
				'templateUrl': 'temp/markets.html'
			}
		}
	}).state('tabs.jisuanqi', {
		'url': '/jisuanqi',
		'views': {
			markets: {
				'templateUrl': 'temp/jisuanqi.html'
			}
		}
	}).state('tabs.order', {
		'url': '/order',
		'views': {
			markets: {
				'templateUrl': 'temp/order.html'
			}
		}
	}).state('tabs.order2', {
		'url': '/order2',
		'views': {
			markets: {
				'templateUrl': 'temp/order2.html'
			}
		}
	}).state('tabs.order3', {
		'url': '/order3',
		'views': {
			markets: {
				'templateUrl': 'temp/order3.html'
			}
		}
	}).state('tabs.orderSuccess', {
		'url': '/orderSuccess',
		'views': {
			markets: {
				'templateUrl': 'temp/orderSuccess.html'
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

myApp.controller('loginCtrl', ['$rootScope', '$ionicHistory', '$timeout', '$scope', '$state', '$http', '$window', function($rootScope, $ionicHistory, $timeout, $scope, $state, $http, $window) {
	$scope.back = function() {
		$state.go('tabs.index');
	};
	$scope.user = {};
	$scope.agree = true;
	var flag = true;

	$scope.setStorage = function() {
		if(flag) {
			localStorage.setItem('user', JSON.stringify($scope.user));
			flag = false;
		} else {
			flag = true;
		}

	}

	if(localStorage.getItem('user')) {
		var data = JSON.parse(localStorage.getItem('user'));
		$scope.user.username = data.username;
		$scope.user.password = data.password;
		$scope.agree = false;
	}

	$('.wraper').css('display', 'none');
	$scope.login = function() {
		$('.wraper').css('display', 'block');
		$http.jsonp('http://182.92.175.36/users/login?callback=JSON_CALLBACK', {
			'params': $scope.user
		}).success(function(data) {
			if(data.success) {
				
				var storage = window.localStorage;
				storage.clear();
				var info = JSON.stringify(data.dataInfo);
				storage.setItem('loginUser', info);

				$timeout(function() {
					$('.wraper').css('display', 'none');
					$scope.user = {};
					$state.go('tabs.index');
				}, 2000);
			} else {
				alert(data.msg);
				$('.wraper').css('display', 'none');
				$scope.user = {};
			}
		});
	};

}]);

myApp.controller('registCtrl', ['$http', '$scope', '$state', '$timeout', function($http, $scope, $state, $timeout) {
	$scope.user = {};

	$scope.back = function() {
		$state.go('tabs.login');
	};
	$('.wraper').css('display', 'none');
	$scope.regist = function() {
		$('.wraper').css('display', 'block');

		$scope.u = {
			username: $scope.user.name,
			password: $scope.user.password
		};
		$http.jsonp('http://182.92.175.36/users/register?callback=JSON_CALLBACK', {
			'params': $scope.u
		}).success(function(data) {

			if(data.success) {
				alert('注册成功');
				localStorage.setItem('user', JSON.stringify($scope.u));
				$timeout(function() {
					$('.wraper').css('display', 'none');
					$state.go('tabs.regist2');
				}, 2000);
			} else {
				alert(data.msg);
				$('.wraper').css('display', 'none');
				$scope.user = {};
			}
		});
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

myApp.controller('accountMangementCtrl', ['$scope', '$state', function($scope, $state) {
	$scope.back = function() {
		$state.go('tabs.index');
	};
}]);

myApp.controller('erweimaCtrl', ['$scope', '$state', function($scope, $state) {
	$scope.back = function() {
		$state.go('tabs.accountMangement');
	};
}]);

myApp.controller('erweima2Ctrl', ['$scope', '$state', function($scope, $state) {
	$scope.back = function() {
		$state.go('tabs.erweima');
	};
}]);

myApp.controller('erweima3Ctrl', ['$scope', '$state', function($scope, $state) {
	$scope.back = function() {
		$state.go('tabs.erweima2');
	};
}]);

myApp.controller('erweima4Ctrl', ['$scope', '$state', function($scope, $state) {
	$scope.back = function() {
		$state.go('tabs.erweima3');
	};
}]);

myApp.controller('accountSearchCtrl', ['$scope', '$state', function($scope, $state) {
	$scope.back = function() {
		$state.go('tabs.accountMangement');
	};
}]);

myApp.controller('msgCtrl', ['$scope', '$state', function($scope, $state) {
	$scope.back = function() {
		$state.go('tabs.accountSearch');
	};
}]);

myApp.controller('sonMsgCtrl', ['$scope', '$state', function($scope, $state) {
	$scope.back = function() {
		$state.go('tabs.msg');
	};
}]);

myApp.controller('addCardCtrl', ['$scope', '$state', function($scope, $state) {
	$scope.back = function() {
		$state.go('tabs.accountMangement');
	};
}]);

myApp.controller('deepmsgCtrl', ['$scope', '$state', function($scope, $state) {
	$scope.back = function() {
		$state.go('tabs.accountSearch');
	};
}]);

myApp.controller('deepmsg2Ctrl', ['$scope', '$state', function($scope, $state) {
	$scope.back = function() {
		$state.go('tabs.deepmsg');
	};
}]);

myApp.controller('addCard2Ctrl', ['$scope', '$state', function($scope, $state) {
	$scope.back = function() {
		$state.go('tabs.addCard');
	};
}]);

myApp.controller('addCard3Ctrl', ['$scope', '$state', function($scope, $state) {
	$scope.back = function() {
		$state.go('tabs.addCard2');
	};
}]);

myApp.controller('transferMoneyCtrl', ['$scope', '$state', function($scope, $state) {
	$scope.back = function() {
		$state.go('tabs.money');
	};
}]);

myApp.controller('getMoneyCtrl', ['$scope', '$state', function($scope, $state) {
	$scope.back = function() {
		$state.go('tabs.transferMoney');
	};
}]);

myApp.controller('getPersonCtrl', ['$scope', '$state', function($scope, $state) {
	$scope.back = function() {
		$state.go('tabs.getMoney');
	};
}]);

myApp.controller('handlePasswordCtrl', ['$scope', '$state', function($scope, $state) {
	$scope.back = function() {
		$state.go('tabs.transferMoney');
	};
}]);

myApp.controller('paySuccessCtrl', ['$scope', '$state', function($scope, $state) {
	$scope.back = function() {
		$state.go('tabs.handlePassword');
	};
}]);

myApp.controller('tonggaoCtrl', ['$scope', '$state', function($scope, $state) {
	$scope.back = function() {
		$state.go('tabs.good');
	};
}]);

myApp.controller('aboutBankCtrl', ['$scope', '$state', function($scope, $state) {
	$scope.back = function() {
		$state.go('tabs.tonggao');
	};
}]);

myApp.controller('suggestionCtrl', ['$scope', '$state', function($scope, $state) {
	$scope.back = function() {
		$state.go('tabs.aboutBank');
	};
}]);

myApp.controller('suggestionSuccessCtrl', ['$scope', '$state', function($scope, $state) {
	$scope.back = function() {
		$state.go('tabs.suggestion');
	};
}]);

myApp.controller('tonggao2Ctrl', ['$scope', '$state', function($scope, $state) {
	$scope.back = function() {
		$state.go('tabs.tonggao');
	};
}]);

myApp.controller('jisuanqiCtrl', ['$scope', '$state', function($scope, $state) {
	$scope.back = function() {
		$state.go('tabs.markets');
	};
}]);

myApp.controller('orderCtrl', ['$scope', '$state', function($scope, $state) {
	$scope.back = function() {
		$state.go('tabs.jisuanqi');
	};
}]);

myApp.controller('order2Ctrl', ['$scope', '$state', function($scope, $state) {
	$scope.back = function() {
		$state.go('tabs.order');
	};
}]);

myApp.controller('order3Ctrl', ['$scope', '$state', function($scope, $state) {
	$scope.back = function() {
		$state.go('tabs.order2');
	};
}]);

myApp.controller('orderSuccessCtrl', ['$scope', '$state', function($scope, $state) {
	$scope.back = function() {
		$state.go('tabs.order3');
	};
}]);