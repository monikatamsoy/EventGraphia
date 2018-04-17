var app = angular.module("app", [])

app.controller("imageGrid", function($scope) {

    $scope.imageArr = []
    for (var i = 1; i <= 20; i++) {
        $scope.imageArr.push(i)
    }

    $scope.loadMore = function() {
        var arrLength = $scope.imageArr.length
        for (var i = arrLength+1; i <= arrLength + 20; i++ ) {
            $scope.imageArr.push(i)
        }
    }
    console.log($scope.imageArr)
})