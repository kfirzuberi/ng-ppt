/**
 * Created by owner on 9/21/15.
 */
angular.module( 'ngBoilerplate.singlePage', [

])
    .controller( 'singlePageCtrl', function ( $scope , $rootScope,listOfValue) {
        $scope.titleClass = [];
        $scope.textClass = [];
        $scope.imageClass = [];

        $scope.fillArrays = function(source, target) {
            Enumerable.From(source).ForEach(function (elem) {
                target.push(elem);
            });
        };

        $scope.fillArrays(listOfValue.textClass,$scope.textClass);
        $scope.fillArrays(listOfValue.imageClass,$scope.imageClass);
        $scope.fillArrays(listOfValue.titleClass,$scope.titleClass);
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
