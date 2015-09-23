/**
 * Created by owner on 9/23/15.
 */
angular.module( 'ngBoilerplate.singlePageView', [

])
    .controller( 'singlePageViewCtrl', function ( $scope , $rootScope,listOfValue) {

    })

    .directive('singlePageView', function() {
        return {
            restrict: 'E',
            scope: {
                ngModel: '='
            },
            require: 'ngModel',
            templateUrl: 'singlePageView/singlePageView.tpl.html',
            controller: 'singlePageViewCtrl'
        };
    })

;
