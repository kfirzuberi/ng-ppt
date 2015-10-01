/**
 * Created by owner on 9/28/15.
 */
angular.module( 'ngBoilerplate.stylePickerCtrl', [

])
    .controller('stylePickerCtrl', function ( $scope , $rootScope,listOfValue) {
        $scope.styles = listOfValue.getArrayList(listOfValue.styles);

        $scope.changeColor = function (color) {
            $scope.ngModel.color = color;
        };
    })

    .directive('stylePicker', function() {
        return {
            restrict: 'E',
            scope: {
                ngModel: '='
            },
            require: 'ngModel',
            templateUrl: 'directives/stylePicker/stylePicker.tpl.html',
            controller: 'stylePickerCtrl'
        };
    })

;
