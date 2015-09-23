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

        self.animation = {};
        self.animation['slideIn'] = 'slideIn';
        self.animation['scaleIn'] = 'scaleIn';

        self.direction = {};
        self.direction['none'] = ' ';
        self.direction['right'] = 'Right';
        self.direction['left'] = 'Left';

        self.delay = {};
        self.delay['0'] = 'delay-0';
        self.delay['1'] = 'delay-1';
        self.delay['2'] = 'delay-2';
        self.delay['3'] = 'delay-3';
        self.delay['4'] = 'delay-4';
        self.delay['5'] = 'delay-5';

        self.titleClass = {};
        self.titleClass['scaleIn'] = {
            constant: 'animate',
            animation: self.animation.scaleIn,
            direction: self.direction.none,
            delay: self.delay['0']
        };
        self.titleClass['slideInLeft'] = {
            constant: 'animate',
            animation: self.animation.slideIn,
            direction: self.direction.left,
            delay: self.delay['0']
        };
        self.titleClass['slideInRight'] = {
            constant: 'animate',
            animation: self.animation.slideIn,
            direction: self.direction.right,
            delay: self.delay['0']
        };

        self.textClass = {};
        self.textClass['slideInLeft_delay_3'] = {
            constant: 'animate',
            animation: self.animation.slideIn,
            direction: self.direction.left,
            delay: self.delay['3']
        };
        self.textClass['slideInLeft_delay_2'] = {
            constant: 'animate',
            animation: self.animation.slideIn,
            direction: self.direction.left,
            delay: self.delay['2']
        };


        self.imageClass = {};
        self.imageClass['slideInRight_delay_3'] = {
            constant: 'animate',
            animation: self.animation.slideIn,
            direction: self.direction.right,
            delay: self.delay['3']
        };
        self.imageClass['scaleIn_delay_3'] = {
            constant: 'animate',
            animation: self.animation.scaleIn,
            direction: self.direction.none,
            delay: self.delay['3']
        };



    })


;