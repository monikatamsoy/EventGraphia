var app = angular.module(app, [])

app.controller("imageGrid", function($scope) {
  $scope.imageArr = Array(20).join().split(',').map(function(a) {
    return this.i++
  }, {i:1})
})
