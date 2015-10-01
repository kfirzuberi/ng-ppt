
angular.module( 'ngBoilerplate.home', [
  'ui.router',
  'ngBoilerplate.pageCustomize'
])

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

.controller('HomeCtrl', function HomeController($scope,$rootScope,$mdDialog ,listOfValue) {
      $scope.editPage = function (event) {

        $mdDialog.show({
          controller: 'pageCustomizeCtrl',
          templateUrl: 'pageCustomize/pageCustomize.tpl.html',
          parent: angular.element(document.body),
          targetEvent: event,
          locals: { currentPage: $scope.currentPage },
          bindToController: true,
          clickOutsideToClose: true
        }).then(function (answer) {
          $scope.status = 'You said the information was "' + answer + '".';
        }, function () {
          $scope.status = 'You cancelled the dialog.';
        });
      };

      $scope.addPage = function (event) {
        var newItem = {};
        $scope.contents.push(newItem);
        $scope.choosePage(newItem);
        $scope.editPage(event);
      };

      $scope.choosePage = function(page) {
        $scope.currentPage = page;
      };

      $scope.contents = [
        {
          nav: {
            class: 'com__nav-link centered',
            thumbs: [
              {class: 'blue-line animate scaleIn delay-3'},
              {class: 'white-circle animate scaleIn delay-5'}
            ]
          },
          content_class: listOfValue.contentClass.title_text_center,
          title: {
            class: listOfValue.titleClass.scaleIn,
            content: 'kfir zuberi',
            color : 'CYAN'
          },
          image: {
            class: listOfValue.imageClass.scaleIn_delay_3,
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
          content_class: listOfValue.contentClass.title_text,
          title: {
            class: listOfValue.titleClass.slideInLeft,
            content: 'animate slideInLeft header'
          },
          content: {
            class:  listOfValue.textClass.slideInLeft_delay_3,
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
          content_class: listOfValue.contentClass.half_text_image,
          isHalf: true,
          content: {
            sideA: {
              title: {
                class: listOfValue.titleClass.slideInLeft,
                content: 'animate slideInLeft header'
              },
              content: {
                class: listOfValue.textClass.slideInLeft_delay_2,
                content: 'some content'
              }
            },
            sideB: {
              image: {
                class: listOfValue.imageClass.scaleIn_delay_3,
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
          content_class: listOfValue.contentClass.title_text_center,
          title: {
            class: listOfValue.titleClass.scaleIn,
            content: 'Communication Design'
          },
          image: {
            class: listOfValue.imageClass.scaleIn_delay_3,
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
          }, content_class: listOfValue.contentClass.title_text,
          title: {
            class: listOfValue.titleClass.slideInLeft,
            content: 'Header'
          },
          content: {
            class:  listOfValue.textClass.slideInLeft_delay_3,
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
          }, content_class: listOfValue.contentClass.half_text_image,
          isHalf: true,
          content: {
            sideA: {
              title: {
                class: listOfValue.titleClass.slideInLeft,
                content: 'animate slideInLeft header'
              },
              content: {
                class: listOfValue.textClass.slideInLeft_delay_2,
                content: 'some content'
              }
            },
            sideB: {
              image: {
                class: listOfValue.imageClass.slideInRight_delay_3,
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
          }, content_class: listOfValue.contentClass.title_text,
          title: {
            class: listOfValue.titleClass.slideInLeft,
            content: 'Header'
          },
          content: {
            class: listOfValue.textClass.slideInLeft_delay_3,
            content: 'some content...'
          }
        }
      ];

})

;

