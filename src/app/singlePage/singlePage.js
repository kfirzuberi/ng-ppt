/**
 * Created by owner on 9/21/15.
 */
angular.module( 'ngBoilerplate.singlePage', [

])
    .controller( 'singlePageCtrl', function ( $scope , $rootScope,listOfValue) {
        $scope.animationClass = listOfValue.getArrayList(listOfValue.animation);
        $scope.directionClass = listOfValue.getArrayList(listOfValue.direction);
        $scope.delayClass = listOfValue.getArrayList(listOfValue.delay);

        $scope.changeProperty = function (property) {
            if($scope.ngModel[property]){
                $scope.ngModel[property] = undefined;
            }else{
                $scope.ngModel[property] = {};
            }
        };

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
