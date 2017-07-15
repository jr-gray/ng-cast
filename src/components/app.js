angular.module('video-player')

.component('app', {
  templateUrl: 'src/templates/app.html',
})

.controller('AppController', AppController)

function AppController() {
	var vm = this;
	vm.selectVideo = function(video) {
		vm.currentVideo = video;
	};
	vm.searchResults = () => {};
	vm.currentVideo = window.exampleVideoData[0];
	vm.videos = window.exampleVideoData;
}


