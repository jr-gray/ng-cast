angular.module('video-player')

.controller('AppController', function($scope) {
	this.selectVideo = () => {};
	this.searchResults = () => {};
	this.currentVideo = window.exampleVideoData[0];
	this.videos = window.exampleVideoData;
})

.component('app', {
  templateUrl: 'src/templates/app.html',
  controller: 'AppController'
});
