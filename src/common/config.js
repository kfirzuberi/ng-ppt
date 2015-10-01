/**
 * Created by owner on 9/23/15.
 */
angular.module('ngBoilerplate.config', [

])
    .config(['$mdIconProvider', function($mdIconProvider) {
    $mdIconProvider
        .iconSet('action', 'assets/svg-sprite-action.svg', 24)
        .iconSet('image', 'assets/svg-sprite-image.svg', 24)
        .iconSet('editor', 'assets/svg-sprite-editor.svg', 24)
        .defaultIconSet('assets/svg-sprite-content.svg', 24);
}]);