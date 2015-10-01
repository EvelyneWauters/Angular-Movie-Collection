(function() {
    angular.module('movieApp.controllers')
        .controller('detailCtrl', detailCtrl);


    function detailCtrl($scope, $http, apiUrl)  {

        $scope.detailUrl = apiUrl + 'Movies/' + id;


        $http.get(detailUrl).success(function(data) {
            $scope.detailData = data;
        });

    }


})();
