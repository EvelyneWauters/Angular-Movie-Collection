(function() {
    angular.module('movieApp.controllers')
        .controller('appCtrl', AppCtrl);        //hier geen array meegeven of hij zou opnieuw gemaakt worden


    function AppCtrl($scope, appTitle, $http)  {
        $scope.appTitle = appTitle;                //deze var is nu op de scope aanwezig onder de naam 'title'



        $scope.goto = function() {
            $location.path('/search');
        }

        //$scope.goto = function(movieId) {
        //    $location.path('/detail/' + movieId);
        //}


    }


})();
