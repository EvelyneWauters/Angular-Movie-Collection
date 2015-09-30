(function() {
    angular.module('movieApp.controllers')
        .controller('appCtrl', AppCtrl);        //hier geen array meegeven of hij zou opnieuw gemaakt worden

    function AppCtrl($scope, appTitle, $http)  {
        $scope.title = appTitle;                //deze var is nu op de scope aanwezig onder de naam 'title'


        $http.get(getAllMoviesUrl).success(function(data) {
            $scope.data = data;
        });

    }


})();
