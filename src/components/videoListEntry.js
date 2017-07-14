angular.module('video-player')
.component('videoListEntry', {
	bindings: {
		video: '<'
	},
	controller: 'videoListController',
	templateUrl: 'src/templates/videoListEntry.html'
});
