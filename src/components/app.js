angular.module('video-player')

.component('app', {
  templateUrl: 'src/templates/app.html',
  bindings: {
  	selectVideo: '<'
  }
})

.controller('AppController', function($scope) {
	$scope.$ctrl.selectVideo = function(video) {
		$scope.$ctrl.currentVideo = video;
	};
	$scope.$ctrl.searchResults = () => {};
	$scope.$ctrl.currentVideo = window.exampleVideoData[0];
	$scope.$ctrl.videos = window.exampleVideoData;
})


