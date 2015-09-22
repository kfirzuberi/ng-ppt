/**
 * Created by owner on 9/22/15.
 */
angular.module( 'ngBoilerplate.services', [

])
.service('listOfValue', function () {
        var self = this;


        self.contentClass = {};
        self.contentClass['title_text_center'] = 'com__section com__section--text centered';
        self.contentClass['half_text_image'] = 'com__section com__section--text com__section--text-img';
        self.contentClass['title_text'] = 'com__section com__section--text';

        self.titleClass = {};
        self.titleClass['scaleIn'] = 'animate scaleIn';
        self.titleClass['slideInLeft'] = 'animate slideInLeft';

        self.textClass = {};
        self.textClass['slideInLeft_delay_3'] = 'animate slideInLeft delay-3';
        self.textClass['slideInLeft_delay_2'] = 'animate slideInLeft delay-2';

        self.imageClass = {};
        self.imageClass['slideInRight_delay_3'] ='animate slideInRight delay-3';
        self.imageClass['scaleIn_delay_3'] = 'animate scaleIn delay-3';
    })


;