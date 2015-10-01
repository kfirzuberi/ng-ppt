/**
 * Created by owner on 9/30/15.
 */
angular.module( 'ngBoilerplate.keyValueSlider', [

])
    .controller('keyValueSliderCtrl', function ( $scope , $rootScope,listOfValue) {

    })

    .directive('keyValueSlider', function() {
        return {
            restrict: 'E',
            scope: {
                ngModel: '=',
                valueName: '@'
            },
            require: 'ngModel',
            templateUrl: 'directives/keyValueSlider/keyValueSlider.tpl.html',
            controller: 'keyValueSliderCtrl'
        };
    })

;
