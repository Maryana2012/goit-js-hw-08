import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const onPlay = function (time) {
   localStorage.setItem("videoplayer-current-time", JSON.stringify(time));
};

// const onThrottledVideo = throttle(onPlay, 1000);

player.on('timeupdate',  throttle(onPlay, 1000));

const timeOfPlayer = localStorage.getItem("videoplayer-current-time");
const timeOfPlayerParsed = JSON.parse(timeOfPlayer);

player.setCurrentTime(timeOfPlayerParsed.seconds);

