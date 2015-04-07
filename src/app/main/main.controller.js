'use strict';

angular.module('johnalxndrgithubio')
    .controller('MainCtrl', function ($scope) {
        $scope.awesomeThings = [
            {
                'title': 'ReadyRead',
                'url': 'https://readyread.firebaseapp.com/',
                'description': 'The Only Reader',
                'logo': 'angular.png'
      },
            {
                'title': 'BrowserSync',
                'url': 'http://browsersync.io/',
                'description': 'Time-saving synchronised browser testing.',
                'logo': 'browsersync.png'
      },
            {
                'title': 'GulpJS',
                'url': 'http://gulpjs.com/',
                'description': 'The streaming build system.',
                'logo': 'gulp.png'
      }
    ];
        angular.forEach($scope.awesomeThings, function (awesomeThing) {
            awesomeThing.rank = Math.random();
        });
   
$(function() {
  $('a[href*=#]:not([href=#]').click(function() {
    if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});
     });