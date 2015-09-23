/**
 * Created by owner on 9/21/15.
 */
angular.module( 'ngBoilerplate.singlePage', [

])
    .controller( 'singlePageCtrl', function ( $scope , $rootScope,listOfValue) {
        $scope.animationClass = [];
        $scope.directionClass = [];
        $scope.delayClass = [];

        $scope.fillArrays = function(source, target) {
            Enumerable.From(source).ForEach(function (elem) {
                target.push(elem);
            });
        };

        $scope.fillArrays(listOfValue.animation,$scope.animationClass);
        $scope.fillArrays(listOfValue.direction,$scope.directionClass);
        $scope.fillArrays(listOfValue.delay,$scope.delayClass);
    })

    .directive('singlePage', function() {
        return {
            restrict: 'E',
            scope: {
                ngModel: '='
            },
            require: 'ngModel',
            templateUrl: 'singlePage/singlePage.tpl.html',
            controller: 'singlePageCtrl'
        };
    })

;
