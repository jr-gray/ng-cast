angular.module('video-player')

.controller('videoPlayerController', function($scope) {
	$scope.video = window.exampleVideoData[0];
})

.component('videoPlayer', {
  templateUrl: 'src/templates/videoPlayer.html',
  controller: 'videoPlayerController'
});
