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

        self.color = {};
        self.color['RED']='#F44336';
        self.color['PINK']='#E91E63';
        self.color['PURPLE']='#9C27B0';
        self.color['DEEP_PURPLE']= '#673AB7';
        self.color['INDIGO']= '#3F51B5';
        self.color['BLUE']='#2196F3';
        self.color['LIGHT_BLUE']='#03A9F4';
        self.color['CYAN']= '#00BCD4';
        self.color['TEAL']='#009688';
        self.color['GREEN']='#4CAF50';
        self.color['LIGHT_GREEN']= '#8BC34A';
        self.color['LIME']='#CDDC39';
        self.color['YELLOW']='#FFEB3B';
        self.color['AMBER']='#FFC107';
        self.color['ORANGE']= '#FF9800';
        self.color['DEEP_ORANGE']='#FF5722';
        self.color['BROWN']='#795548';
        self.color['GREY']='#9E9E9E';
        self.color['BLUE_GREY']= '#607D8B';

        self.defaultColor = self.color.CYAN;


        self.styles = {};
        self.styles['title_text_center'] = {
            contentClass: 'com__section com__section--text centered',
            nav: {
                class: 'com__nav-link centered',
                thumbs: [
                    {class: 'blue-line animate scaleIn delay-3'},
                    {class: 'white-circle animate scaleIn delay-5'}
                ]
            }
        };
        self.styles['half_text_image'] = {
            contentClass: 'com__section com__section--text com__section--text-img',
            nav: {
                class: 'com__nav-link flex-row',
                sideA: {
                    thumbs: [
                        {class: 'blue-line animate scaleInLeft delay-3'},
                        {class: 'white-line animate scaleInLeft delay-4'}
                    ]
                },
                sideB: {
                    thumbs: [
                        {class: 'white-circle animate slideInRight delay-5'}
                    ]
                }
            }
        };
        self.styles['title_text'] = {
            contentClass: 'com__section com__section--text',
            nav: {
                class: 'com__nav-link',
                thumbs: [
                    {class: 'blue-line animate scaleInLeft delay-2'},
                    {class: 'white-line animate scaleInLeft delay-4'},
                    {class: 'white-line animate scaleInLeft delay-5'}
                ]
            }
        };


        self.getArrayList = function(source) {
            var target = [];

            Enumerable.From(source).ForEach(function (elem) {
                target.push(elem);
            });

            return target;
        };





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