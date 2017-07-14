angular.module('video-player')
.component('videoListEntry', {
	bindings: {
		data: '<'
	},
	controller: 'videoListController',
	templateUrl: 'src/templates/videoListEntry.html'
});
