/**
 * Each section of the site has its own module. It probably also has
 * submodules, though this boilerplate is too simple to demonstrate it. Within
 * `src/app/home`, however, could exist several additional folders representing
 * additional modules that would then be listed as dependencies of this one.
 * For example, a `note` section could have the submodules `note.create`,
 * `note.delete`, `note.edit`, etc.
 *
 * Regardless, so long as dependencies are managed correctly, the build process
 * will automatically take take of the rest.
 *
 * The dependencies block here is also where component dependencies should be
 * specified, as shown below.
 */
angular.module( 'ngBoilerplate.home', [
  'ui.router'
])

/**
 * Each section or module of the site can also have its own routes. AngularJS
 * will handle ensuring they are all available at run-time, but splitting it
 * this way makes each module more "self-contained".
 */
.config(function config( $stateProvider ) {
  $stateProvider.state( 'home', {
    url: '/home',
    views: {
      "main": {
        controller: 'HomeCtrl',
        templateUrl: 'home/home.tpl.html'
      }
    },
    data:{ pageTitle: 'Home' }
  });
})

/**
 * And of course we define a controller for our route.
 */
.controller( 'HomeCtrl', function HomeController( $scope ) {
      $scope.contents = [
        {
          nav: {
            class: 'com__nav-link centered',
            thumbs: [
              {class: 'blue-line animate scaleIn delay-3'},
              {class: 'white-circle animate scaleIn delay-5'}
            ]
          },
          content_class: 'com__section com__section--text centered',
          title: {
            class: 'animate scaleIn',
            content: 'kfir zuberi'
          },
          image: {
            class: 'animate scaleIn delay-3',
            src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/45226/ettrics-logo.svg'
          }
        },
        {
          nav: {
            class: 'com__nav-link',
            thumbs: [
              {class: 'blue-line animate scaleInLeft delay-2'},
              {class: 'white-line animate scaleInLeft delay-4'},
              {class: 'white-line animate scaleInLeft delay-5'}
            ]
          },
          content_class: 'com__section com__section--text',
          title: {
            class: 'animate slideInLeft',
            content: 'animate slideInLeft header'
          },
          content: {
            class: 'animate slideInLeft delay-3',
            content: 'some content'
          }
        },
        {
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
          },
          content_class: 'com__section com__section--text com__section--text-img',
          isHalf: true,
          content: {
            sideA: {
              title: {
                class: 'animate slideInLeft',
                content: 'animate slideInLeft header'
              },
              content: {
                class: 'animate slideInLeft delay-2',
                content: 'some content'
              }
            },
            sideB: {
              image: {
                class: 'animate scaleIn delay-3',
                src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/45226/ettrics-logo.svg'
              }
            }
          }
        },
        {
          nav: {
            class: 'com__nav-link centered',
            thumbs: [
              {class: 'blue-line animate scaleIn delay-3'},
              {class: 'white-circle animate scaleIn delay-5'}
            ]
          },
          content_class: 'com__section com__section--text centered',
          title: {
            class: 'animate scaleIn',
            content: 'Communication Design'
          },
          image: {
            class: 'animate scaleIn delay-3',
            src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/45226/ettrics-logo.svg'
          }
        },
        {
          nav: {
            class: 'com__nav-link',
            thumbs: [
              {class: 'blue-line animate scaleInLeft delay-2'},
              {class: 'white-line animate scaleInLeft delay-4'},
              {class: 'white-line animate scaleInLeft delay-5'}
            ]
          }, content_class: 'com__section com__section--text',
          title: {
            class: 'animate slideInLeft',
            content: 'Header'
          },
          content: {
            class: 'animate slideInLeft delay-3',
            content: 'some content...'
          }
        },
        {
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
          }, content_class: 'com__section com__section--text com__section--text-img',
          isHalf: true,
          content: {
            sideA: {
              title: {
                class: 'animate slideInLeft',
                content: 'animate slideInLeft header'
              },
              content: {
                class: 'animate slideInLeft delay-2',
                content: 'some content'
              }
            },
            sideB: {
              image: {
                class: 'animate slideInRight delay-3',
                src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/45226/ettrics-logo.svg'
              }
            }
          }
        },
        {
          nav: {
            class: 'com__nav-link',
            thumbs: [
              {class: 'blue-line animate scaleInLeft delay-2'},
              {class: 'white-line animate scaleInLeft delay-4'},
              {class: 'white-line animate scaleInLeft delay-5'}
            ]
          }, content_class: 'com__section com__section--text',
          title: {
            class: 'animate slideInLeft',
            content: 'Header'
          },
          content: {
            class: 'animate slideInLeft delay-3',
            content: 'some content...'
          }
        }
      ];

})

;

