(function() {
    angular.module('movieApp.controllers')
        .controller('collectionCtrl', collectionCtrl);        //hier geen array meegeven of hij zou opnieuw gemaakt worden


    function collectionCtrl($scope, $http)  {

        $http.get("https://angularbackend.azurewebsites.net:443/api/Movies").success(function(data) {
            $scope.data = data;

        });
    }


})();
