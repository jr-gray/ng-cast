angular.module('video-player')

.controller('videoPlayerController', function($scope) {

})

.component('videoPlayer', {
	bindings: {
		video: '<'
	},
  templateUrl: 'src/templates/videoPlayer.html',
  controller: 'videoPlayerController'
});
