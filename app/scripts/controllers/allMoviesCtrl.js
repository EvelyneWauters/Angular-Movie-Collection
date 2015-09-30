

var myModule = angular.module('todoApp', []);
myModule.controller('todoCtrl', function ($scope, $http) {

    //JSON uitlezen via httpservice
    $http.get('scripts/data.json').success(function(data) {
        $scope.data = data;
    });