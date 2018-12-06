const ap1 = new APlayer({
    element: document.getElementById('player1'),
    mini: false,
    autoplay: false,
    showlrc: 3,
    mutex: true,
    theme: '#ad7a86',
    listmaxheight: '450px',
    audio: [
        {
        name: '甜蜜蜜',
        artist: 'Very',
        url: '甜蜜蜜.mp3',
        cover: 'lichangle.png',
        lrc: '甜蜜蜜.lrc'
    },
        {
        name: '我愿意',
        artist: 'Very',
        url: '我愿意.mp3',
        cover: 'you1.png',
        lrc: '我愿意.lrc'
    },
    {
        name: '夏洛特烦恼',
        artist: 'Very',
        url: '夏洛特烦恼.mp3',
        cover: 'you2.png',
        lrc: "夏洛特烦恼.lrc"
    },
    {
        name: '盛夏的果实',
        artist: 'Very',
        url: '盛夏的果实.mp3',
        cover: 'you4.png',
        lrc: "盛夏的果实.lrc"
    },
    {
        name: '米店',
        artist: 'Very',
        url: '米店.mp3',
        cover: 'you3.png',
        lrc: "米店.lrc"
    },
    {
        name: '爱的代价',
        artist: 'Very',
        url: '爱的代价.mp3',
        cover: '爱的代价.jpg',
        lrc: "爱的代价.lrc"
    },
    {
        name: '一次就好',
        artist: 'Very',
        url: '一次就好.mp3',
        cover: '一次就好.jpg',
        lrc: "一次就好.lrc"
    },
    {
        name: '亲密爱人',
        artist: 'Very',
        url: '亲密爱人.mp3',
        cover: 'you1.png',
        lrc: "亲密爱人.lrc"
    },
    {
        name: '月光',
        artist: 'Very',
        url: '月光.mp3',
        cover: 'you2.png',
        lrc: "月光.lrc"
    },
    {
        name: '很爱很爱你',
        artist: 'Very',
        url: '很爱很爱你.mp3',
        cover: 'lichangle1.png',
        lrc: "很爱很爱你.lrc"
    },
    {
        name: '故乡',
        artist: 'Very',
        url: '故乡.mp3',
        cover: 'you6.png',
        lrc: "故乡.lrc"
    },
    {
        name: '忽然之间',
        artist: 'Very',
        url: '忽然之间.mp3',
        cover: 'you7.jpg',
        lrc: "忽然之间.lrc"
    },
    {
        name: '夕阳红',
        artist: 'Very',
        url: '夕阳红.mp3',
        cover: 'you8.png',
        lrc: "夕阳红.lrc"
    },
    {
        name: '还有我',
        artist: 'Very',
        url: '还有我.mp3',
        cover: 'you9.png',
        lrc: "还有我.lrc"
    },
    {
        name: '被遗忘的时光',
        artist: 'Very',
        url: '被遗忘的时光.mp3',
        cover: '被遗忘的时光.jpg',
        lrc: "被遗忘的时光.lrc"
    }
    ]
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
$.ajax({
    url: 'https://api.i-meto.com/meting/api?server=netease&type=playlist&id=35798529',
    success: function (list) {
        ap8.list.add(JSON.parse(list));
    }
});
