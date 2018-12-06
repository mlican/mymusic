var ap1 = new APlayer({
    element: document.getElementById('player1'),
    mini: false,
    autoplay: false,
    showlrc: 3,
    mutex: true,
    theme: '#615754',
    mode: 'order',
    audio: {
        name: '甜蜜蜜',
        artist: 'Very',
        url: '甜蜜蜜.mp3',
        cover: 'you.png',
        lrc: '甜蜜蜜.lrc'
    }
});
ap1.on('play', function () {
    console.log('play');
});
ap1.on('play', function () {
    console.log('play play');
});
ap1.on('pause', function () {
    console.log('pause');
});
ap1.on('canplay', function () {
    console.log('canplay');
});
ap1.on('playing', function () {
    console.log('playing');
});
ap1.on('ended', function () {
    console.log('ended');
});
ap1.on('error', function () {
    console.log('error');
});

var ap2 = new APlayer({
    element: document.getElementById('player2'),
    mini: false,
    autoplay: false,
    showlrc: 3,
    mutex: true,
    theme: '#615754',
    mode: 'order',
    audio: {
        name: '我愿意',
        artist: 'Very',
        url: '我愿意.mp3',
        cover: 'you1.png',
        lrc: '我愿意.lrc'
    }
});

var ap3 = new APlayer({
    element: document.getElementById('player3'),
    mini: false,
    autoplay: false,
    showlrc: 3,
    mutex: true,
    theme: '#615754',
    mode: 'order',
    audio: {
        name: '夏洛特烦恼',
        artist: 'Very',
        url: '夏洛特烦恼.mp3',
        cover: 'you2.png',
        lrc: "夏洛特烦恼.lrc"
    }
});

var ap4 = new APlayer({
    element: document.getElementById('player4'),
    mini: false,
    autoplay: false,
    showlrc: 3,
    mutex: true,
    theme: '#615754',
    mode: 'order',
    audio: {
        name: '盛夏的果实',
        artist: 'Very',
        url: '盛夏的果实.mp3',
        cover: 'you4.png',
        lrc: "盛夏的果实.lrc"
    }
});
var ap5 = new APlayer({
    element: document.getElementById('player5'),
    mini: false,
    autoplay: false,
    showlrc: 3,
    mutex: true,
    theme: '#615754',
    mode: 'order',
    audio: {
        name: '米店',
        artist: 'Very',
        url: '米店.mp3',
        cover: 'you3.png',
        lrc: "米店.lrc"
    }
});
var ap6 = new APlayer({
    element: document.getElementById('player6'),
    mini: false,
    autoplay: false,
    showlrc: 3,
    mutex: true,
    theme: '#615754',
    mode: 'order',
    audio: {
        name: '爱的代价',
        artist: 'Very',
        url: '爱的代价.mp3',
        cover: '爱的代价.jpg',
        lrc: "爱的代价.lrc"
    }
});
var ap7 = new APlayer({
    element: document.getElementById('player7'),
    mini: false,
    autoplay: false,
    showlrc: 3,
    mutex: true,
    theme: '#615754',
    mode: 'order',
    audio: {
        name: '一次就好',
        artist: 'Very',
        url: '一次就好.mp3',
        cover: '一次就好.jpg',
        lrc: "一次就好.lrc"
    }
});
