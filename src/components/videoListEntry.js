angular.module('video-player')
.component('videoListEntry', {
	bindings: {
		video: '<',
		selectVideo: '<'
	},
	controller: 'videoListController',
	templateUrl: 'src/templates/videoListEntry.html'
});
