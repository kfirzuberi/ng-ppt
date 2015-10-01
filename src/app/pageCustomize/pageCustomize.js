/**
 * Created by owner on 9/21/15.
 */
angular.module( 'ngBoilerplate.pageCustomize', [

])
    .controller('pageCustomizeCtrl', function ( $scope , $rootScope,$mdDialog,listOfValue,currentPage) {
        $scope.contentClass = [];
        Enumerable.From(listOfValue.contentClass).ForEach(function (elem) {
            $scope.contentClass.push(elem);
        });

        $scope.currentPage = currentPage;

        $scope.contentClassChanged = function () {
            alert('ff');
        };

        $scope.hide = function() {
            $mdDialog.hide();
        };
        $scope.cancel = function() {
            $mdDialog.cancel();
        };
        $scope.answer = function(answer) {
            $mdDialog.hide(answer);
        };

        $rootScope.$on('editPage',function(e,page){
            $scope.safeApply(function() {
                $scope.currentPage = page;
            });
        });

        $scope.safeApply = function(fn) {
            var phase = this.$root.$$phase;
            if(phase == '$apply' || phase == '$digest') {
                if(fn && (typeof(fn) === 'function')) {
                    fn();
                }
            } else {
                this.$apply(fn);
            }
        };
    })

.directive('pageCustomize', function() {
        return {
            restrict: 'E',
            templateUrl: 'pageCustomize/pageCustomize.tpl.html',
            controller: 'pageCustomizeCtrl'
        };
    })

;


