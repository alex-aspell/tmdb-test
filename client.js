const app = angular.module('myApp', []);

const movieController = app.controller('MovieController', ['$http', function($http){
    let self = this; 
    console.log('angular connected');
    self.movieArray = [];

    self.getMovies = function(){
        $http({
            method: 'GET',
            url: `https://api.themoviedb.org/3/movie/550?api_key=4a5d31bd9f16d5c8d4ac776d630c9bc1`
        }).then(function(response){
            console.log('response', response.data);
            self.movieArray.push(response.data);
        })
    }

    self.getMovies();
}])