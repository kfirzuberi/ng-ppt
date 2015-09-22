/**
 * Created by owner on 9/21/15.
 */
angular.module( 'ngBoilerplate.pageCustomize', [

])
    .controller( 'pageCustomizeCtrl', function ( $scope , $rootScope,listOfValue) {
        $scope.contentClass = [];
        Enumerable.From(listOfValue.contentClass).ForEach(function (elem) {
            $scope.contentClass.push(elem);
        });


        $scope.currentPage = {
            nav: {
                class: 'com__nav-link centered',
                thumbs: [
                    {class: 'blue-line animate scaleIn delay-3'},
                    {class: 'white-circle animate scaleIn delay-5'}
                ]
            },
            content_class: listOfValue.contentClass.title_text,
            title: {
                class: 'animate scaleIn',
                content: 'kfir zuberi'
            },
            image: {
                class: 'animate scaleIn delay-3',
                src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/45226/ettrics-logo.svg'
            },
            content: {
                class: 'animate slideInLeft delay-3',
                content: 'some content'
            }
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
