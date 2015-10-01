(function() {

    angular.module("movieApp.config", [])
        .constant('apiUrl', 'https://angularbackend.azurewebsites.net:443/api/')
        .constant('getAllMoviesUrl', 'https://angularbackend.azurewebsites.net/swagger/api/Movies')
        .constant('appTitle', 'Movie Database');
})();
