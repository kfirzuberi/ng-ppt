/**
 * Created by owner on 9/25/15.
 */
angular.module( 'ngBoilerplate.colorPickerCtrl', [

])
    .controller('colorPickerCtrl', function ( $scope , $rootScope,listOfValue) {
        $scope.colors = listOfValue.getArrayList(listOfValue.color);

        $scope.changeColor = function (color) {
            $scope.ngModel.color = color;
        };
    })

    .directive('colorPicker', function() {
        return {
            restrict: 'E',
            scope: {
                ngModel: '='
            },
            require: 'ngModel',
            templateUrl: 'directives/colorPicker/colorPicker.tpl.html',
            controller: 'colorPickerCtrl'
        };
    })

;
