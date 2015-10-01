angular.module( 'ngBoilerplate', [
    'ngMaterial',
  'templates-app',

  'templates-common',
    'ngBoilerplate.config',
  'ngBoilerplate.home',
  'ngBoilerplate.about',
  'ngBoilerplate.colorPickerCtrl',
  'ngBoilerplate.stylePickerCtrl',
  'ngBoilerplate.zoomooz',
  'ngBoilerplate.zoomoozShapeEdit',
  'ngBoilerplate.keyValueSlider',
  'ngBoilerplate.pageCustomize',
  'ngBoilerplate.services',
  'ngBoilerplate.singlePage',
    'ngBoilerplate.singlePageView',
  'ui.router'
])

.config( function myAppConfig ( $stateProvider, $urlRouterProvider ) {
  $urlRouterProvider.otherwise( '/home' );
})

.run( function run () {
})

.controller( 'AppCtrl', function AppCtrl ( $scope, $location ) {
  $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
    if ( angular.isDefined( toState.data.pageTitle ) ) {
      $scope.pageTitle = toState.data.pageTitle + ' | ngBoilerplate' ;
    }
  });
})

;

