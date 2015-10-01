/**
 * Created by owner on 9/30/15.
 */
angular.module( 'ngBoilerplate.zoomoozShapeEdit', [

])
    .controller('zoomoozShapeEditCtrl', function ( $scope , $rootScope) {
        $scope.shapeParameters = {
            skewX: {name: 'skewX', value: 0, unit: 'deg', max: 89, min: -89},
            skewY: {name: 'skewY', value: 0, unit: 'deg', max: 89, min: -89},
            scaleX: {name: 'scaleX', value: 1, step: 0.1, max: 5, min: -5},
            scaleY: {name: 'scaleY', value: 1, step: 0.1, max: 5, min: -5},
            translateX: {name: 'translateX', value: 0, unit: 'px', max: 100, min: -100},
            translateY: {name: 'translateY', value: 0, unit: 'px', max: 100, min: -100},
            rotate: {name: 'rotate', value: 0, unit: 'deg', max: 180, min: -180}
        };

        $scope.getTransform = function () {
            var transform = '';

            if ($scope.shapeParameters.skewX.value !== 0) {
                transform += 'skewX(' + $scope.shapeParameters.skewX.value + $scope.shapeParameters.skewX.unit + ') ';
            }

            if ($scope.shapeParameters.skewY.value !== 0) {
                transform += 'skewY(' + $scope.shapeParameters.skewY.value + $scope.shapeParameters.skewY.unit + ') ';
            }

            if ($scope.shapeParameters.scaleX.value !== 1) {
                transform += 'scaleX(' + $scope.shapeParameters.scaleX.value + ') ';
            }

            if ($scope.shapeParameters.scaleY.value !== 1) {
                transform += 'scaleY(' + $scope.shapeParameters.scaleY.value + ') ';
            }

            if ($scope.shapeParameters.translateX.value !== 0) {
                transform += 'translateX(' + $scope.shapeParameters.translateX.value + $scope.shapeParameters.translateX.unit + ') ';
            }

            if ($scope.shapeParameters.translateY.value !== 0) {
                transform += 'translateY(' + $scope.shapeParameters.translateY.value + $scope.shapeParameters.translateY.unit + ') ';
            }

            if ($scope.shapeParameters.rotate.value !== 0) {
                transform += 'rotate(' + $scope.shapeParameters.rotate.value + $scope.shapeParameters.rotate.unit + ') ';
            }

            return transform;
        };
    })

    .directive('zoomoozShapeEdit', function() {
        return {
            restrict: 'E',
            templateUrl: 'directives/zoomoozShapeEdit/zoomoozShapeEdit.tpl.html',
            controller: 'zoomoozShapeEditCtrl'
        };
    })

;
