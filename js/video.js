var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('ytplayer', {
    height: document.documentElement.clientHeight,
    width: document.documentElement.clientWidth,
    videoId: '8t3XYNxnUBs',
    playerVars: {
      loop: '1',
      disablekb: '0',
      controls: '0',
      showinfo: '0'
    },
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}

function onPlayerReady(event) {
  event.target.playVideo();
  event.target.mute();
}

function onPlayerStateChange(event) {
}

function stopVideo() {
  player.stopVideo();
}
