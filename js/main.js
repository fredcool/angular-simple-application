(function() {
angular.module('myFilters', [])
.filter('upperBound', function() {
	return function(input, upperBound) {
		if(input > upperBound)
			return upperBound+'+';
		else
			return input;
	}
});

var app = angular.module('myApp', ['ui.bootstrap', 'myFilters']);
app.controller('mainCtrl', ['$scope', function($scope) {
	$scope.productList = [];
	$scope.create = function() {
		$scope.form.productId = $scope.productList.length + 1;
		//TODO ajax call to create product to the server
		$scope.productList.push(angular.copy($scope.form));
		$scope.form = {};
	};
}]);
})();
