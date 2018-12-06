var ap1 = new APlayer({
    element: document.getElementById('player1'),
    narrow: false,
    autoplay: false,
    showlrc: 3,
    mutex: true,
    theme: '#615754',
    mode: 'order',
    music: {
        title: '甜蜜蜜',
        author: 'Very',
        url: '甜蜜蜜.mp3',
        pic: '蓝色风衣.png',
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
    narrow: false,
    autoplay: false,
    showlrc: 3,
    mutex: true,
    theme: '#615754',
    mode: 'order',
    music: {
        title: '我愿意',
        author: 'Very',
        url: '我愿意.mp3',
        pic: '蓝色风衣.png',
        lrc: '我愿意.lrc'
    }
});

var ap3 = new APlayer({
    element: document.getElementById('player3'),
    narrow: false,
    autoplay: false,
    showlrc: 3,
    mutex: true,
    theme: '#615754',
    mode: 'order',
    music: {
        title: '夏洛特烦恼',
        author: 'Very',
        url: '夏洛特烦恼.mp3',
        pic: '蓝色风衣.png',
        lrc: "夏洛特烦恼.lrc"
    }
});

var ap4 = new APlayer({
    element: document.getElementById('player4'),
    narrow: false,
    autoplay: false,
    showlrc: 3,
    mutex: true,
    theme: '#615754',
    mode: 'order',
    music: {
        title: '盛夏的果实',
        author: 'Very',
        url: '盛夏的果实.mp3',
        pic: '蓝色风衣.png',
        lrc: "盛夏的果实.lrc"
    }
});
var ap5 = new APlayer({
    element: document.getElementById('player5'),
    narrow: false,
    autoplay: false,
    showlrc: 3,
    mutex: true,
    theme: '#615754',
    mode: 'order',
    music: {
        title: '米店',
        author: 'Very',
        url: '米店.mp3',
        pic: 'you3.png',
        lrc: "米店.lrc"
    }
});
var ap6 = new APlayer({
    element: document.getElementById('player6'),
    narrow: false,
    autoplay: false,
    showlrc: 3,
    mutex: true,
    theme: '#615754',
    mode: 'order',
    music: {
         title: '爱的代价',
        author: 'Very',
        url: '爱的代价.mp3',
        pic: '爱的代价.jpg',
        lrc: "爱的代价.lrc"
    }
});
var ap7 = new APlayer({
    element: document.getElementById('player7'),
    narrow: false,
    autoplay: false,
    showlrc: 3,
    mutex: true,
    theme: '#615754',
    mode: 'order',
    music: {
        title: '旅行',
        author: '瑞瑞',
        url: 'https://rui-music.firebaseapp.com/旅行.mp3',
        pic: 'images/nanfangguniang.jpg',
        lrc: "旅行.lrc"
    }
});
var ap8 = new APlayer({
    element: document.getElementById('player8'),
    narrow: false,
    autoplay: false,
    showlrc: 3,
    mutex: true,
    theme: '#615754',
    mode: 'order',
    music: {
        title: '我们',
        author: '瑞瑞',
        url: 'https://rui-music.firebaseapp.com/我们.mp3',
        pic: 'images/我们.jpg',
        lrc: "我们.lrc"
    }
});
var ap9 = new APlayer({
    element: document.getElementById('player9'),
    narrow: false,
    autoplay: false,
    showlrc: 3,
    mutex: true,
    theme: '#615754',
    mode: 'order',
    music: {
        title: '500 miles',
        author: '瑞瑞',
        url: 'http://l.na.ppsrc.com/1q2wP7J7LSrHrOczY7uuTg',
        pic: 'images/500.jpg',
        lrc: "500.lrc"
    }
});
var ap10 = new APlayer({
    element: document.getElementById('player10'),
    narrow: false,
    autoplay: false,
    showlrc: 3,
    mutex: true,
    theme: '#615754',
    mode: 'order',
    music: {
        title: 'The sound of silence',
        author: '瑞瑞',
        url: 'https://rui-music.firebaseapp.com/The sound of silence.mp3',
        pic: 'images/the.jpg',
        lrc: "The Sound Of Silence.lrc"
    }
});
var ap11 = new APlayer({
    element: document.getElementById('player11'),
    narrow: false,
    autoplay: false,
    showlrc: 3,
    mutex: true,
    theme: '#615754',
    mode: 'order',
    music: {
        title: 'safe and sound',
        author: '瑞瑞',
        url: 'https://rui-music.firebaseapp.com/Safe and sound.mp3',
        pic: 'images/Safe.jpg',
        lrc: "Safe.lrc"
    }
    });