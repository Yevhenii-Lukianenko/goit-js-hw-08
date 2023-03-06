import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframeRef = document.querySelector('iframe');
const player = new Player(iframeRef);

const STORAGE_KEY = 'videoplayer-current-time';
const isSTORAGE_KEY = localStorage.getItem(STORAGE_KEY);

player.on('timeupdate', throttle(onPlay, 1000));

if (isSTORAGE_KEY) {
  onLoadPlayer();
}

function onPlay({ seconds }) {
  localStorage.setItem(STORAGE_KEY, seconds);
}

function onLoadPlayer() {
  player.setCurrentTime(isSTORAGE_KEY);
}
