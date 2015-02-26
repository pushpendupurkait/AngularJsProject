/**
 * 
 */
var app=angular.module("angularApp",['MyApp']);
app.controller("angularController", function($scope) {
	$scope.name =undefined;
	$scope.lname=undefined;
	$scope.sort=true;
	$scope.sortBy="id";
	$scope.pp=[{
			"id":"1",
			"name":"pp"
	},{
		"id":"2",
			"name":"pp2"
	}];
	$scope.sorting=function(){
			if ($scope.sort==true){
			$scope.sort= false;
			}
			else{
			$scope.sort= true;
			}
		
	}
})
app.controller("ctrl2",['$scope', function($scope){
	$scope.a=1;
	$scope.b=2;
	$scope.counter= function(){
		$scope.a++;
	}
}])
app.controller("ctrl3",fxn3 );
function fxn3($scope){
	$scope.msg="hello";
	$scope.count=1;
}
function Car(color, model){
	this.color = color;
	this.model = model;
}
Car.prototype.year=2012;
var car = Car("red", "civic");