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

var done = false;
function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING && !done) {
    setTimeout(stopVideo, 6000);
    done = true;
  }
}
function stopVideo() {
  player.stopVideo();
}
