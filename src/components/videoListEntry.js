angular.module('video-player')
.component('videoListEntry', {
	bindings: {
		video: '<',
		selectvideo: '<'
	},
	controller: 'videoListController',
	templateUrl: 'src/templates/videoListEntry.html'
});
