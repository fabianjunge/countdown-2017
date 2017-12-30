var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('ytplayer', {
    height: document.documentElement.clientHeight,
    width: document.documentElement.clientWidth,
    videoId: '7-4GpL41DIE',
    playerVars: {
      disablekb: '0',
      controls: '0',
      showinfo: '0',
      autoplay: '1'
    },
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}

function onPlayerReady(event) {
  event.target.mute();
}

function onPlayerStateChange(event) {
  if (player.getPlayerState() == 0) { 
    // 0 == ended -> restart video
    event.target.playVideo();
  }
}
