/**
 * Created by owner on 9/23/15.
 */
angular.module('ngBoilerplate.config', [

])
    .config(['$mdIconProvider', function($mdIconProvider) {
    $mdIconProvider
        .iconSet('action', 'assets/svg-sprite-action.svg', 24)
        .defaultIconSet('assets/svg-sprite-content.svg', 24);
}]);