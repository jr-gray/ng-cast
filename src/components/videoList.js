angular.module('video-player')

.component('videoList', {
	bindings: {
		videos: '<',
		selectvideo: '<'
	},
  templateUrl: 'src/templates/videoList.html',
  controller: 'videoListController'
})

.controller('videoListController', function($scope) {
	$scope.videos = window.exampleVideoData;
})
